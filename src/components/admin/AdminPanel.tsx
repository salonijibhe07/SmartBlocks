/**
 * AdminPanel component - Enhanced with dark mode
 * Displays overview stats and admin controls
 */

'use client';

import { Block } from '@/lib/types';
import { Plus, BarChart3, Globe, Filter } from 'lucide-react';

interface AdminPanelProps {
  blocks: Block[];
  totalBlocks: number;
  onAddNew: () => void;
  children?: React.ReactNode;
}

export default function AdminPanel({ 
  blocks, 
  totalBlocks, 
  onAddNew, 
  children 
}: AdminPanelProps) {
  // Calculate stats
  const categoryStats = blocks.reduce((acc, block) => {
    acc[block.category] = (acc[block.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategory = Object.entries(categoryStats).sort(([,a], [,b]) => b - a)[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Manage your blocks and monitor activity</p>
        </div>
        
        <button
          onClick={onAddNew}
          className="btn-3d flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors shadow-md interactive-scale"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Block
        </button>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Blocks */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 glass-effect">
          <div className="flex items-center">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
              <Globe className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Blocks</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{totalBlocks}</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 glass-effect">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <Filter className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{Object.keys(categoryStats).length}</p>
            </div>
          </div>
        </div>

        {/* Top Category */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 glass-effect">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Top Category</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {topCategory ? `${topCategory[0]} (${topCategory[1]})` : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 glass-effect">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Category Distribution</h3>
        <div className="space-y-3">
          {Object.entries(categoryStats).map(([category, count]) => {
            const percentage = (count / totalBlocks) * 100;
            return (
              <div key={category} className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-32">{category}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        category === 'Technology' ? 'bg-purple-500' :
                        category === 'E-Commerce' ? 'bg-orange-500' :
                        category === 'Education' ? 'bg-green-500' :
                        category === 'Health & Fitness' ? 'bg-pink-500' :
                        category === 'Finance' ? 'bg-blue-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 w-16 text-right">{count} blocks</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Children (Block Grid) */}
      {children}
    </div>
  );
}