/**
 * BlockGrid component - Passes hover state to parent
 */

'use client';

import { Block } from '@/lib/types';
import { useTheme } from '@/components/ui/ThemeProvider';
import BlockCard from './BlockCard';
import DragDropGrid from './DragDropGrid';
import { Loader2, Layers } from 'lucide-react';

interface BlockGridProps {
  blocks: Block[];
  loading?: boolean;
  isAdminMode?: boolean;
  onEdit?: (block: Block) => void;
  onDelete?: (id: number) => void;
  onReorder?: (reorderedBlocks: Block[]) => void;
  enableDragDrop?: boolean;
  onCardHover?: (color: string | null) => void;
}

export default function BlockGrid({
  blocks,
  loading = false,
  isAdminMode = false,
  onEdit,
  onDelete,
  onReorder,
  enableDragDrop = false,
  onCardHover
}: BlockGridProps) {
  const { theme } = useTheme();

  const handleReorder = (reorderedBlocks: Block[]) => {
    onReorder?.(reorderedBlocks);
  };

  return (
    <div className="w-full">
      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24">
          <Loader2 className="h-12 w-12 animate-spin mb-4" style={{ color: theme.accent }} />
          <span className="text-lg text-gray-600 dark:text-gray-400">Loading your domains...</span>
        </div>
      )}

      {/* Empty State */}
      {!loading && blocks.length === 0 && (
        <div className="text-center py-24">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
            <Layers className="h-10 w-10 text-gray-400 dark:text-gray-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            No domains yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Start by creating your first domain block.
          </p>
        </div>
      )}

      {/* Blocks Grid - 2 COLUMNS */}
      {!loading && blocks.length > 0 && (
        <>
          {enableDragDrop && isAdminMode ? (
            <DragDropGrid
              blocks={blocks}
              isAdminMode={isAdminMode}
              onEdit={onEdit}
              onDelete={onDelete}
              onReorder={handleReorder}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blocks.map((block, index) => (
                <div
                  key={block.id}
                  className="animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 80}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <BlockCard
                    block={block}
                    isAdminMode={isAdminMode}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onHover={onCardHover}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}