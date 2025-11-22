'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useBlocks } from '@/hooks/useBlocks';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Block, CreateBlockRequest, UpdateBlockRequest } from '@/lib/types';
import AdminPanel from '@/components/admin/AdminPanel';
import AddBlockModal from '@/components/admin/AddBlockModal';
import EditBlockModal from '@/components/admin/EditBlockModal';
import BlockGrid from '@/components/blocks/BlockGrid';
import FloatingBackground from '@/components/ui/FloatingBackground';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ThemeToggleButton from '@/components/ui/ThemeToggleButton';
import { ArrowLeft, Sparkles } from 'lucide-react';

import MessagesList from '@/components/admin/MessageList';

export default function AdminPage() {
  const { blocks, loading, error, totalBlocks, createBlock, updateBlock, deleteBlock } = useBlocks();
  const { theme, isDarkMode } = useTheme();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBlock, setEditingBlock] = useState<Block | null>(null);

  const handleEdit = (block: Block) => {
    setEditingBlock(block);
    setShowEditModal(true);
  };

  const handleDelete = async (id: number) => {
    await deleteBlock(id);
  };

  const handleAddBlock = async (data: CreateBlockRequest) => {
    const result = await createBlock(data);
    if (result) setShowAddModal(false);
  };

  const handleUpdateBlock = async (id: number, data: UpdateBlockRequest) => {
    const result = await updateBlock(id, data);
    if (result) {
      setShowEditModal(false);
      setEditingBlock(null);
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${
        isDarkMode ? theme.gradientDark : theme.gradient
      } relative overflow-hidden`}
    >
      <FloatingBackground />
      <ThemeToggleButton />

      {/* Header */}
      <header className="relative bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Site
            </Link>

            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6" style={{ color: theme.accent }} />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Smart Blocks Admin
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-8 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <AdminPanel
          blocks={blocks}
          totalBlocks={totalBlocks}
          onAddNew={() => setShowAddModal(true)}
        >
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-3 text-blue-800 dark:text-blue-200 text-lg">
              🎛️ Admin Dashboard Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Block Management</h4>
                <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                  <li>• Add new content blocks</li>
                  <li>• Edit existing blocks</li>
                  <li>• Delete unused blocks</li>
                  <li>• Drag and drop reordering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Contact Management</h4>
                <ul className="text-sm space-y-1 text-blue-600 dark:text-blue-400">
                  <li>• View all contact submissions</li>
                  <li>• Update inquiry status</li>
                  <li>• Add internal notes</li>
                  <li>• Filter by status</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sorted ascending (oldest first, newest last) */}
          <BlockGrid
            blocks={[...blocks].sort((a, b) => a.id - b.id)}
            loading={loading}
            isAdminMode={true}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onReorder={() => {}}
            enableDragDrop={true}
          />
        </AdminPanel>

        {/* Contact Messages Section */}
        <section className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  📬
                </span>
                Contact Messages Management
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                View and manage all contact form submissions from your website visitors
              </p>
            </div>
            <div className="p-6">
              <MessagesList />
            </div>
          </div>
        </section>
      </main>

      {showAddModal && (
        <AddBlockModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddBlock}
        />
      )}

      {showEditModal && editingBlock && (
        <EditBlockModal
          isOpen={showEditModal}
          block={editingBlock}
          onClose={() => {
            setShowEditModal(false);
            setEditingBlock(null);
          }}
          onSubmit={handleUpdateBlock}
        />
      )}
    </div>
  );
}
