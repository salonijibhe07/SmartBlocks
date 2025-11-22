/**
 * Constants and configuration for Smart Block Project API
 */

// API Configuration
export const API_CONFIG = {
  VERSION: 'v1',
  BASE_PATH: '/api',
  DEFAULT_LIMIT: 50,
  MAX_LIMIT: 100,
  DEFAULT_OFFSET: 0,
} as const;

// Available categories for blocks
export const CATEGORIES = {
  TECHNOLOGY: 'Technology',
  ECOMMERCE: 'E-Commerce', 
  EDUCATION: 'Education',
  HEALTH_FITNESS: 'Health & Fitness',
  FINANCE: 'Finance',
  ENTERTAINMENT: 'Entertainment',
} as const;

// Available colors for blocks (Tailwind CSS classes)
export const BLOCK_COLORS = {
  RED: 'bg-red-500',
  BLUE: 'bg-blue-500',
  GREEN: 'bg-green-500',
  YELLOW: 'bg-yellow-500',
  PURPLE: 'bg-purple-500',
  ORANGE: 'bg-orange-500',
  PINK: 'bg-pink-500',
  INDIGO: 'bg-indigo-500',
  TEAL: 'bg-teal-500',
  CYAN: 'bg-cyan-500',
} as const;

// Category to color mapping for consistency
export const CATEGORY_COLORS = {
  [CATEGORIES.TECHNOLOGY]: BLOCK_COLORS.PURPLE,
  [CATEGORIES.ECOMMERCE]: BLOCK_COLORS.ORANGE,
  [CATEGORIES.EDUCATION]: BLOCK_COLORS.GREEN,
  [CATEGORIES.HEALTH_FITNESS]: BLOCK_COLORS.PINK,
  [CATEGORIES.FINANCE]: BLOCK_COLORS.BLUE,
  [CATEGORIES.ENTERTAINMENT]: BLOCK_COLORS.RED,
} as const;

// HTTP Status codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  VALIDATION_FAILED: 'Validation failed',
  BLOCK_NOT_FOUND: 'Block not found',
  INVALID_BLOCK_ID: 'Invalid block ID',
  DATABASE_ERROR: 'Database operation failed',
  INTERNAL_SERVER_ERROR: 'Internal server error',
  INVALID_CATEGORY: 'Invalid category provided',
  INVALID_COLOR: 'Invalid color provided',
  INVALID_URL: 'Invalid URL format',
  TITLE_REQUIRED: 'Title is required',
  URL_REQUIRED: 'URL is required',
  DUPLICATE_URL: 'URL already exists',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  BLOCK_CREATED: 'Block created successfully',
  BLOCK_UPDATED: 'Block updated successfully',
  BLOCK_DELETED: 'Block deleted successfully',
  BLOCKS_FETCHED: 'Blocks retrieved successfully',
} as const;

// Database constraints
export const DB_CONSTRAINTS = {
  TITLE_MAX_LENGTH: 255,
  DESCRIPTION_MAX_LENGTH: 1000,
  URL_MAX_LENGTH: 2048,
  CATEGORY_MAX_LENGTH: 100,
  COLOR_MAX_LENGTH: 50,
} as const;

// Request rate limiting
export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100, // requests per window
} as const;

// Validation patterns
export const VALIDATION_PATTERNS = {
  URL_REGEX: /^https?:\/\/.+/,
  COLOR_REGEX: /^bg-(red|blue|green|yellow|purple|orange|pink|indigo|teal|cyan)-500$/,
} as const;

// Type helpers
export type Category = typeof CATEGORIES[keyof typeof CATEGORIES];
export type BlockColor = typeof BLOCK_COLORS[keyof typeof BLOCK_COLORS];
export type HttpStatus = typeof HTTP_STATUS[keyof typeof HTTP_STATUS];

// Utility functions
export const getCategoryColor = (category: Category): BlockColor => {
  return CATEGORY_COLORS[category] || BLOCK_COLORS.BLUE;
};

export const isValidCategory = (category: string): category is Category => {
  return Object.values(CATEGORIES).includes(category as Category);
};

export const isValidColor = (color: string): color is BlockColor => {
  return Object.values(BLOCK_COLORS).includes(color as BlockColor);
};