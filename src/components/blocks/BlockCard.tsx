/**
 * BlockCard component - With background color broadcast on hover
 */

'use client';

import { Block } from '@/lib/types';
import { Edit, Trash2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

interface BlockCardProps {
  block: Block;
  isAdminMode?: boolean;
  onEdit?: (block: Block) => void;
  onDelete?: (id: number) => void;
  isNew?: boolean;
  onHover?: (color: string | null) => void;
}

const getDomainFromUrl = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '');
  } catch {
    return url;
  }
};

export default function BlockCard({ 
  block, 
  isAdminMode = false, 
  onEdit, 
  onDelete,
  isNew = false,
  onHover
}: BlockCardProps) {
  const { theme } = useTheme();

  const handleCardClick = () => {
    if (!isAdminMode) {
      window.open(block.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit?.(block);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this block?')) {
      onDelete?.(block.id);
    }
  };

  const handleMouseEnter = () => {
    onHover?.(block.color);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
  };

  return (
    <div
      className={`
        group relative h-full
        bg-white dark:bg-gray-900
        rounded-3xl overflow-hidden
        transition-all duration-500 ease-out
        ${!isAdminMode ? 'cursor-pointer hover:-translate-y-3 hover:shadow-2xl' : ''}
        border-2 border-gray-200 dark:border-gray-800
      `}
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
      }}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Color fill from left side on hover - with low opacity */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-0 transition-all duration-500 rounded-l-3xl group-hover:w-full group-hover:rounded-3xl opacity-10"
        style={{
          backgroundColor: block.color
        }}
      />
      
      {/* Border overlay that appears on hover */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          border: `4px solid ${block.color}`,
          boxShadow: `0 0 20px ${block.color}40`
        }}
      />

      <div className="relative p-10 z-10">
        {/* Header with arrow */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              {block.title}
            </h3>
          </div>

          {!isAdminMode && (
            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: `${block.color}30` }}
              >
                <ArrowUpRight className="w-5 h-5" style={{ color: block.color }} />
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        {block.description && (
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8 min-h-[3rem]">
            {block.description}
          </p>
        )}

        {/* Domain */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 font-mono">
            {getDomainFromUrl(block.url)}
          </span>
          
          {!isAdminMode && (
            <span 
              className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity text-gray-900 dark:text-white"
            >
              Visit →
            </span>
          )}
        </div>

        {/* Admin Actions */}
        {isAdminMode && (
          <div className="flex items-center space-x-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleEdit}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all font-semibold"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/30 transition-all font-semibold"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}