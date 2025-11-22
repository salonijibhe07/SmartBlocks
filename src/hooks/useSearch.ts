/**
 * Advanced search hook with debouncing and history
 * Handles search state, filtering, and search history
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import { Block } from '@/lib/types';
import { useLocalStorage } from './useLocalStorage';

interface UseSearchReturn {
  // Search state
  searchTerm: string;
  debouncedSearchTerm: string;
  selectedCategory: string;
  filteredBlocks: Block[];
  
  // Search actions
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string) => void;
  clearSearch: () => void;
  
  // Search history
  searchHistory: string[];
  addToHistory: (term: string) => void;
  clearHistory: () => void;
  
  // Search stats
  totalResults: number;
  hasActiveFilters: boolean;
}

const SEARCH_DELAY = 300; // ms
const MAX_HISTORY = 10;

export function useSearch(
  blocks: Block[],
  onSearch?: (term: string, category: string) => void
): UseSearchReturn {
  // Search state
  const [searchTerm, setSearchTermState] = useState('');
  const [selectedCategory, setSelectedCategoryState] = useState('All');
  
  // Debounced search term
  const [debouncedSearchTerm] = useDebounce(searchTerm, SEARCH_DELAY);
  
  // Search history (persisted in localStorage)
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>('search-history', []);

  // Update search term
  const setSearchTerm = useCallback((term: string) => {
    setSearchTermState(term);
  }, []);

  // Update selected category
  const setSelectedCategory = useCallback((category: string) => {
    setSelectedCategoryState(category);
    // Reset search when changing category
    if (searchTerm) {
      setSearchTermState('');
    }
  }, [searchTerm]);

  // Clear all filters
  const clearSearch = useCallback(() => {
    setSearchTermState('');
    setSelectedCategoryState('All');
  }, []);

  // Add search term to history
  const addToHistory = useCallback((term: string) => {
    if (!term.trim() || term.length < 2) return;
    
    setSearchHistory(prev => {
      // Remove if already exists
      const filtered = prev.filter(item => item.toLowerCase() !== term.toLowerCase());
      // Add to beginning
      const updated = [term, ...filtered];
      // Keep only MAX_HISTORY items
      return updated.slice(0, MAX_HISTORY);
    });
  }, [setSearchHistory]);

  // Clear search history
  const clearHistory = useCallback(() => {
    setSearchHistory([]);
  }, [setSearchHistory]);

  // Filter blocks based on search and category
  const filteredBlocks = useMemo(() => {
    let filtered = [...blocks];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(block => block.category === selectedCategory);
    }

    // Filter by search term
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(block => 
        block.title.toLowerCase().includes(searchLower) ||
        block.description?.toLowerCase().includes(searchLower) ||
        block.url.toLowerCase().includes(searchLower) ||
        block.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [blocks, selectedCategory, debouncedSearchTerm]);

  // Search stats
  const totalResults = filteredBlocks.length;
  const hasActiveFilters = selectedCategory !== 'All' || debouncedSearchTerm.trim() !== '';

  // Effect to trigger search callback
  useEffect(() => {
    if (onSearch) {
      onSearch(debouncedSearchTerm, selectedCategory);
    }
  }, [debouncedSearchTerm, selectedCategory, onSearch]);

  // Effect to add completed searches to history
  useEffect(() => {
    if (debouncedSearchTerm.trim() && debouncedSearchTerm.length >= 2) {
      addToHistory(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, addToHistory]);

  return {
    // Search state
    searchTerm,
    debouncedSearchTerm,
    selectedCategory,
    filteredBlocks,
    
    // Search actions
    setSearchTerm,
    setSelectedCategory,
    clearSearch,
    
    // Search history
    searchHistory,
    addToHistory,
    clearHistory,
    
    // Search stats
    totalResults,
    hasActiveFilters,
  };
}