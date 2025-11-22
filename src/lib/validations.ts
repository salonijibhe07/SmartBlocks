/**
 * Zod validation schemas for Smart Block Project
 */

import { z } from 'zod';

// Available categories
export const CATEGORIES = [
  'Technology',
  'E-Commerce',
  'Education',
  'Health & Fitness',
  'Finance',
  'Entertainment'
] as const;

// Available colors
export const COLORS = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-orange-500',
  'bg-pink-500',
  'bg-indigo-500'
] as const;

// URL validation schema
const urlSchema = z.string().url({ message: 'Please enter a valid URL' });

const COUNTRY_PHONE_RULES = {
  '+91': { minLength: 10, maxLength: 10, pattern: /^[6-9]\d{9}$/ },
  '+1': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+44': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+61': { minLength: 9, maxLength: 9, pattern: /^\d{9}$/ },
  '+971': { minLength: 9, maxLength: 9, pattern: /^\d{9}$/ },
  '+65': { minLength: 8, maxLength: 8, pattern: /^\d{8}$/ },
  '+60': { minLength: 9, maxLength: 10, pattern: /^\d{9,10}$/ },
  '+86': { minLength: 11, maxLength: 11, pattern: /^\d{11}$/ },
  '+81': { minLength: 10, maxLength: 10, pattern: /^\d{10}$/ },
  '+49': { minLength: 10, maxLength: 11, pattern: /^\d{10,11}$/ },
};

export function validatePhoneNumber(phone: string, countryCode: string): boolean {
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  const rules = COUNTRY_PHONE_RULES[countryCode as keyof typeof COUNTRY_PHONE_RULES];

  if (!rules) return false;

  if (cleanPhone.length < rules.minLength || cleanPhone.length > rules.maxLength) {
    return false;
  }

  if (rules.pattern && !rules.pattern.test(cleanPhone)) {
    return false;
  }

  return true;
}


// Create block schema
export const createBlockSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(255, 'Title must be less than 255 characters'),
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional(),
  url: urlSchema,
  color: z.enum(COLORS, { 
    errorMap: () => ({ message: 'Please select a valid color' })
  }),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({ message: 'Please select a valid category' })
  })
});

// Update block schema (all fields optional)
export const updateBlockSchema = z.object({
  title: z.string()
    .min(1, 'Title is required')
    .max(255, 'Title must be less than 255 characters')
    .optional(),
  description: z.string()
    .max(1000, 'Description must be less than 1000 characters')
    .optional(),
  url: urlSchema.optional(),
  color: z.enum(COLORS, { 
    errorMap: () => ({ message: 'Please select a valid color' })
  }).optional(),
  category: z.enum(CATEGORIES, {
    errorMap: () => ({ message: 'Please select a valid category' })
  }).optional()
});

// Query parameters schema
export const queryParamsSchema = z.object({
  category: z.enum(CATEGORIES).optional(),
  limit: z.string().transform(Number).pipe(z.number().min(1).max(100)).optional(),
  offset: z.string().transform(Number).pipe(z.number().min(0)).optional()
});

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone number too short').max(15, 'Phone number too long'),
  countryCode: z.string().min(2, 'Country code required'),
  company: z.string().max(100, 'Company name too long').optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200, 'Subject too long'),
  serviceInterest: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message too long'),
  captchaToken: z.string().optional(),
});

// Contact form data sanitization
export function sanitizeFormData(data: any) {
  return {
    name: data.name?.trim(),
    email: data.email?.trim().toLowerCase(),
    phone: data.phone?.replace(/[^\d]/g, ''),
    countryCode: data.countryCode,
    company: data.company?.trim() || null,
    subject: data.subject?.trim(),
    serviceInterest: data.serviceInterest || null,
    budgetRange: data.budgetRange || null,
    message: data.message?.trim(),
  };
}

export type CreateBlockInput = z.infer<typeof createBlockSchema>;
export type UpdateBlockInput = z.infer<typeof updateBlockSchema>;
export type QueryParams = z.infer<typeof queryParamsSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;