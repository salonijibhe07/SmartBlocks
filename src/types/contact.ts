export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company?: string;
  subject: string;
  serviceInterest?: string;
  budgetRange?: string;
  message: string;
  captchaToken: string;
}

export interface DatabaseContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  company?: string;
  subject: string;
  serviceInterest?: string;
  budgetRange?: string;
  message: string;
  isVerified: boolean;
  captchaScore?: number;
  ipAddress?: string;
  userAgent?: string;
  status: 'new' | 'in_progress' | 'replied' | 'closed' | 'spam';
  adminNotes?: string;
  repliedAt?: Date;
  repliedBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  contactId?: number;
}

export const SERVICE_INTERESTS = [
  'Web Development',
  'E-commerce Development',
  'CMS Development',
  'Software Development',
  'Digital Marketing',
  'SEO Services',
  'Mobile App Development',
  'UI/UX Design',
  'Other',
] as const;

export const BUDGET_RANGES = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  'Over ₹2,50,000',
  'Not sure yet',
] as const;

export const COUNTRY_CODES = [
  { code: '+91', country: 'India', maxLength: 10 },
  { code: '+1', country: 'USA/Canada', maxLength: 10 },
  { code: '+44', country: 'UK', maxLength: 10 },
  { code: '+61', country: 'Australia', maxLength: 9 },
  { code: '+971', country: 'UAE', maxLength: 9 },
  { code: '+65', country: 'Singapore', maxLength: 8 },
  { code: '+60', country: 'Malaysia', maxLength: 10 },
  { code: '+86', country: 'China', maxLength: 11 },
  { code: '+81', country: 'Japan', maxLength: 10 },
  { code: '+49', country: 'Germany', maxLength: 11 },
] as const;

export type ServiceInterest = typeof SERVICE_INTERESTS[number];
export type BudgetRange = typeof BUDGET_RANGES[number];
export type CountryCode = typeof COUNTRY_CODES[number];

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  fullName: string;
  role: 'admin' | 'super_admin';
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminLoginData {
  username: string;
  password: string;
}

export interface AdminSession {
  userId: number;
  username: string;
  role: string;
  expiresAt: Date;
}