/**
 * EditBlockModal component - Enhanced with dark mode support
 * Modal for editing existing blocks
 */

'use client';

import { useState } from 'react';
import { Block, UpdateBlockRequest, CreateBlockRequest } from '@/lib/types';
import BlockForm from '@/components/blocks/BlockForm';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface EditBlockModalProps {
  isOpen: boolean;
  block: Block | null;
  onClose: () => void;
  onSubmit: (id: number, data: UpdateBlockRequest) => Promise<void>;
}

export default function EditBlockModal({ 
  isOpen, 
  block, 
  onClose, 
  onSubmit 
}: EditBlockModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: CreateBlockRequest) => {
    if (!block) return;

    setLoading(true);
    setError(null);

    try {
      // Convert CreateBlockRequest to UpdateBlockRequest
      const updateData: UpdateBlockRequest = {
        title: data.title,
        description: data.description,
        url: data.url,
        color: data.color,
        category: data.category
      };
      
      await onSubmit(block.id, updateData);
      setSuccess(true);
      
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update block');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError(null);
    setLoading(false);
    onClose();
  };

  if (!isOpen || !block) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Edit Block</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{block.title}</p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              disabled={loading}
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="p-6">
            {success && (
              <div className="flex items-center justify-center py-8 text-green-600 dark:text-green-400">
                <CheckCircle className="h-12 w-12 mr-3" />
                <div>
                  <p className="text-lg font-semibold">Block Updated!</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Closing automatically...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" />
                  <p className="text-red-800 dark:text-red-300 text-sm">{error}</p>
                </div>
              </div>
            )}

            {!success && (
              <BlockForm
                block={block}
                onSubmit={handleSubmit}
                onCancel={handleClose}
                loading={loading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}