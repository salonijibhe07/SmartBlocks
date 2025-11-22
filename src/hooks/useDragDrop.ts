/**
 * Custom hook for drag and drop functionality
 * Handles block reordering with smooth animations
 */

import { useState, useCallback } from 'react';
import { 
  DndContext, 
  DragEndEvent, 
  DragStartEvent,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { 
  arrayMove, 
  SortableContext, 
  sortableKeyboardCoordinates,
  verticalListSortingStrategy 
} from '@dnd-kit/sortable';
import { Block } from '@/lib/types';

interface UseDragDropReturn {
  // DnD Kit context props
  sensors: any;
  handleDragStart: (event: DragStartEvent) => void;
  handleDragEnd: (event: DragEndEvent) => void;
  activeBlock: Block | null;
  
  // Sortable context props  
  SortableContext: typeof SortableContext;
  DndContext: typeof DndContext;
  DragOverlay: typeof DragOverlay;
  
  // Utilities
  reorderBlocks: (blocks: Block[], activeId: string, overId: string) => Block[];
  updateBlockPositions: (reorderedBlocks: Block[]) => Promise<void>;
}

export function useDragDrop(
  onReorder?: (reorderedBlocks: Block[]) => void
): UseDragDropReturn {
  const [activeBlock, setActiveBlock] = useState<Block | null>(null);

  // Configure drag sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px of movement required to start drag
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag start
  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    const activeBlockData = active.data.current?.block as Block;
    setActiveBlock(activeBlockData || null);
  }, []);

  // Handle drag end
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      setActiveBlock(null);
      return;
    }

    // Get the blocks from the data
    const blocks = active.data.current?.blocks as Block[];
    if (!blocks) {
      setActiveBlock(null);
      return;
    }

    // Reorder the blocks
    const reorderedBlocks = reorderBlocks(blocks, active.id as string, over.id as string);
    
    // Call the reorder callback
    onReorder?.(reorderedBlocks);
    
    setActiveBlock(null);
  }, [onReorder]);

  // Reorder blocks utility
  const reorderBlocks = useCallback((
    blocks: Block[], 
    activeId: string, 
    overId: string
  ): Block[] => {
    const oldIndex = blocks.findIndex(block => block.id.toString() === activeId);
    const newIndex = blocks.findIndex(block => block.id.toString() === overId);

    if (oldIndex === -1 || newIndex === -1) {
      return blocks;
    }

    return arrayMove(blocks, oldIndex, newIndex);
  }, []);

  // Update block positions in database
  const updateBlockPositions = useCallback(async (reorderedBlocks: Block[]) => {
    try {
      // Create position updates for each block
      const positionUpdates = reorderedBlocks.map((block, index) => ({
        id: block.id,
        position: index
      }));

      // Batch update positions (we'll implement this API endpoint)
      const response = await fetch('/api/blocks/reorder', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ positions: positionUpdates }),
      });

      if (!response.ok) {
        throw new Error('Failed to update block positions');
      }

      console.log('Block positions updated successfully');
    } catch (error) {
      console.error('Error updating block positions:', error);
      // You might want to show a toast notification here
    }
  }, []);

  return {
    sensors,
    handleDragStart,
    handleDragEnd,
    activeBlock,
    SortableContext,
    DndContext,
    DragOverlay,
    reorderBlocks,
    updateBlockPositions,
  };
}