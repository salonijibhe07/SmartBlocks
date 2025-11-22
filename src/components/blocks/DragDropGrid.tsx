/**
 * DragDropGrid component - Drag and drop enabled grid
 * Allows reordering blocks with smooth animations
 */

'use client';

import { Block } from '@/lib/types';
import { useDragDrop } from '@/hooks/useDragDrop';
import { closestCenter } from '@dnd-kit/core';
import { verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableBlockCard from './SortableBlockCard';
import { GripVertical, MousePointer } from 'lucide-react';

interface DragDropGridProps {
  blocks: Block[];
  isAdminMode?: boolean;
  onEdit?: (block: Block) => void;
  onDelete?: (id: number) => void;
  onReorder?: (reorderedBlocks: Block[]) => void;
  disabled?: boolean;
}

export default function DragDropGrid({
  blocks,
  isAdminMode = false,
  onEdit,
  onDelete,
  onReorder,
  disabled = false
}: DragDropGridProps) {
  const {
    sensors,
    handleDragStart,
    handleDragEnd,
    activeBlock,
    SortableContext,
    DndContext,
    DragOverlay,
  } = useDragDrop(onReorder);

  // Create array of block IDs for sortable context
  const blockIds = blocks.map(block => block.id.toString());

  if (disabled || !isAdminMode) {
    // Render regular grid when drag & drop is disabled
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blocks.map((block, index) => (
          <div
            key={block.id}
            className="animate-fadeIn"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <SortableBlockCard
              block={block}
              isAdminMode={isAdminMode}
              onEdit={onEdit}
              onDelete={onDelete}
              isDragging={false}
              dragHandle={null}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Drag & Drop Instructions */}
      

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={blockIds} strategy={verticalListSortingStrategy}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blocks.map((block, index) => (
              <SortableBlockCard
                key={block.id}
                block={block}
                blocks={blocks}
                isAdminMode={isAdminMode}
                onEdit={onEdit}
                onDelete={onDelete}
                isDragging={activeBlock?.id === block.id}
                dragHandle={
                  <div className="cursor-grab active:cursor-grabbing p-2 hover:bg-gray-100 rounded transition-colors">
                    <GripVertical className="h-4 w-4 text-gray-400" />
                  </div>
                }
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>
        </SortableContext>

        {/* Drag Overlay */}
        <DragOverlay>
          {activeBlock ? (
            <div className="transform rotate-2 scale-105 shadow-2xl">
              <SortableBlockCard
                block={activeBlock}
                isAdminMode={isAdminMode}
                onEdit={onEdit}
                onDelete={onDelete}
                isDragging={true}
                dragHandle={null}
                style={{ opacity: 0.9 }}
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}