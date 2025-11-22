/**
 * SortableBlockCard component - BlockCard with drag & drop capabilities
 * Wraps BlockCard with sortable functionality
 */

'use client';

import { Block } from '@/lib/types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BlockCard from './BlockCard';

interface SortableBlockCardProps {
  block: Block;
  blocks?: Block[];
  isAdminMode?: boolean;
  onEdit?: (block: Block) => void;
  onDelete?: (id: number) => void;
  isDragging?: boolean;
  dragHandle?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function SortableBlockCard({
  block,
  blocks,
  isAdminMode = false,
  onEdit,
  onDelete,
  isDragging = false,
  dragHandle,
  style,
}: SortableBlockCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isSortableDragging,
  } = useSortable({
    id: block.id.toString(),
    data: {
      block,
      blocks,
    },
    disabled: !isAdminMode,
  });

  const sortableStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...style,
  };

  return (
    <div
      ref={setNodeRef}
      style={sortableStyle}
      className={`
        animate-fadeIn relative group
        ${isSortableDragging ? 'opacity-50 z-50' : ''}
        ${isDragging ? 'shadow-2xl' : ''}
      `}
    >
      {/* Drag Handle */}
      {isAdminMode && dragHandle && (
        <div
          {...attributes}
          {...listeners}
          className="absolute top-2 left-2 z-10 bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
        >
          {dragHandle}
        </div>
      )}

      {/* Block Card */}
      <BlockCard
        block={block}
        isAdminMode={isAdminMode}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
}