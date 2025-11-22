/**
 * BlockForm component - Enhanced with dark mode support
 * Form for creating and editing blocks
 */

'use client';

import { useState, useEffect } from 'react';
import { Block, CreateBlockRequest, Category } from '@/lib/types';
import { Save, X, Loader2, Link2 } from 'lucide-react';

interface BlockFormProps {
  block?: Block | null;
  onSubmit: (data: CreateBlockRequest) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

// Available options
const CATEGORIES: Category[] = [
  'Technology',
  'E-Commerce',
  'Education',
  'Health & Fitness',
  'Finance',
  'Entertainment',
];

export default function BlockForm({ 
  block, 
  onSubmit, 
  onCancel, 
  loading = false 
}: BlockFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    category: 'Technology' as Category,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize form with block data if editing
  useEffect(() => {
    if (block) {
      setFormData({
        title: block.title,
        description: block.description || '',
        url: block.url,
        category: block.category as Category,
      });
    }
  }, [block]);

  // Helper function to validate URL
  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 255) {
      newErrors.title = 'Title must be less than 255 characters';
    }

    if (!formData.url.trim()) {
      newErrors.url = 'URL is required';
    } else if (!isValidUrl(formData.url)) {
      newErrors.url = 'Please enter a valid URL';
    }

    if (formData.description && formData.description.length > 1000) {
      newErrors.description = 'Description must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const submitData: CreateBlockRequest = {
        title: formData.title.trim(),
        description: formData.description.trim() || undefined,
        url: formData.url.trim(),
        category: formData.category,
        color: 'bg-blue-500', // default color
      };
      
      await onSubmit(submitData);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-700
            border-2 ${errors.title ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:border-amber-500 dark:focus:border-amber-400
            transition-colors`}
          placeholder="Enter block title"
          disabled={loading}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.title}</p>
        )}
      </div>

      {/* Description Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-700
            border-2 ${errors.description ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
            text-gray-900 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            focus:outline-none focus:border-amber-500 dark:focus:border-amber-400
            transition-colors
            resize-none`}
          placeholder="Enter block description (optional)"
          rows={3}
          disabled={loading}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.description}</p>
        )}
      </div>

      {/* URL Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          URL <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link2 className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className={`w-full pl-10 pr-4 py-2 rounded-lg
              bg-gray-50 dark:bg-gray-700
              border-2 ${errors.url ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:border-amber-500 dark:focus:border-amber-400
              transition-colors`}
            placeholder="https://example.com"
            disabled={loading}
          />
        </div>
        {errors.url && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.url}</p>
        )}
      </div>

      {/* Category Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
          className={`w-full px-4 py-2 rounded-lg
            bg-gray-50 dark:bg-gray-700
            border-2 border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-white
            focus:outline-none focus:border-amber-500 dark:focus:border-amber-400
            transition-colors`}
          disabled={loading}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors interactive-scale"
          disabled={loading}
        >
          <X className="h-4 w-4 inline mr-2" />
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md interactive-scale disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 inline mr-2 animate-spin" />
          ) : (
            <Save className="h-4 w-4 inline mr-2" />
          )}
          {block ? 'Update Block' : 'Create Block'}
        </button>
      </div>
    </form>
  );
}
