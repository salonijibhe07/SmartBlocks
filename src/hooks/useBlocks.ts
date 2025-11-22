/**
 * Custom hook for Smart Block Project CRUD operations
 * Handles API calls, search, and state management
 */

import { useState, useEffect, useCallback } from "react";
import {
  Block,
  CreateBlockRequest,
  UpdateBlockRequest,
  ApiResponse,
  BlocksResponse,
} from "@/lib/types";
import { formatApiError } from "@/lib/utils";

interface UseBlocksReturn {
  blocks: Block[];
  loading: boolean;
  error: string | null;
  totalBlocks: number;
  fetchBlocks: (category?: string) => Promise<void>;
  createBlock: (blockData: CreateBlockRequest) => Promise<Block | null>;
  updateBlock: (id: number, blockData: UpdateBlockRequest) => Promise<Block | null>;
  deleteBlock: (id: number) => Promise<boolean>;
  searchBlocks: (term: string) => Promise<void>;
  refreshBlocks: () => Promise<void>;
}

export function useBlocks(): UseBlocksReturn {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalBlocks, setTotalBlocks] = useState(0);

  /** ✅ Fetch all blocks (optional category filter) */
  const fetchBlocks = useCallback(async (category?: string) => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();
      if (category) params.append("category", category);

      const response = await fetch(`/api/blocks?${params}`);
      const data: ApiResponse<BlocksResponse> = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to fetch blocks");
      }

      setBlocks(data.data?.blocks || []);
      setTotalBlocks(data.data?.total || 0);
    } catch (err) {
      setError(formatApiError(err));
      console.error("❌ Error fetching blocks:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  /** ✅ Create a new block with optimistic UI */
  const createBlock = useCallback(async (blockData: CreateBlockRequest) => {
    setError(null);
    const tempId = Date.now();

    const optimisticBlock: Block = {
      id: tempId,
      ...blockData,
      description: blockData.description ?? null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setBlocks((prev) => [optimisticBlock, ...prev]);
    setTotalBlocks((prev) => prev + 1);

    try {
      const response = await fetch("/api/blocks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blockData),
      });

      const data: ApiResponse<Block> = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error);

      setBlocks((prev) =>
        prev.map((b) => (b.id === tempId ? data.data! : b))
      );
      return data.data || null;
    } catch (err) {
      setBlocks((prev) => prev.filter((b) => b.id !== tempId));
      setTotalBlocks((prev) => prev - 1);
      setError(formatApiError(err));
      console.error("❌ Error creating block:", err);
      return null;
    }
  }, []);

  /** ✅ Update existing block */
  const updateBlock = useCallback(async (id: number, blockData: UpdateBlockRequest) => {
    setError(null);
    try {
      const response = await fetch(`/api/blocks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blockData),
      });

      const data: ApiResponse<Block> = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error);

      setBlocks((prev) =>
        prev.map((b) => (b.id === id ? data.data! : b))
      );
      return data.data || null;
    } catch (err) {
      setError(formatApiError(err));
      console.error("❌ Error updating block:", err);
      return null;
    }
  }, []);

  /** ✅ Delete block */
  const deleteBlock = useCallback(async (id: number) => {
    setError(null);
    try {
      const response = await fetch(`/api/blocks/${id}`, { method: "DELETE" });
      const data: ApiResponse<null> = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error);

      setBlocks((prev) => prev.filter((b) => b.id !== id));
      setTotalBlocks((prev) => prev - 1);
      return true;
    } catch (err) {
      setError(formatApiError(err));
      console.error("❌ Error deleting block:", err);
      return false;
    }
  }, []);

  /** ✅ Search blocks by keyword */
  const searchBlocks = useCallback(async (term: string) => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (term.trim()) params.append("search", term.trim());

      const response = await fetch(`/api/blocks?${params}`);
      const data: ApiResponse<BlocksResponse> = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error);

      setBlocks(data.data?.blocks || []);
      setTotalBlocks(data.data?.total || 0);
    } catch (err) {
      setError(formatApiError(err));
      console.error("❌ Error searching blocks:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  /** ✅ Refresh data */
  const refreshBlocks = useCallback(async () => {
    await fetchBlocks();
  }, [fetchBlocks]);

  /** ✅ Load data initially */
  useEffect(() => {
    fetchBlocks();
  }, [fetchBlocks]);

  return {
    blocks,
    loading,
    error,
    totalBlocks,
    fetchBlocks,
    createBlock,
    updateBlock,
    deleteBlock,
    searchBlocks,
    refreshBlocks,
  };
}
