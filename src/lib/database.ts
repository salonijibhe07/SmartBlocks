import { Pool, PoolClient } from 'pg';
import { ContactFormData, DatabaseContact, AdminUser } from '@/types/contact';
import bcrypt from 'bcryptjs';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function getDbClient(): Promise<PoolClient> {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new Error('Failed to connect to database');
  }
}

export async function testConnection(): Promise<boolean> {
  let client: PoolClient | null = null;
  try {
    client = await getDbClient();
    const result = await client.query('SELECT NOW()');
    console.log('Database connected successfully:', result.rows[0]);
    return true;
  } catch (error) {
    console.error('Database connection test failed:', error);
    return false;
  } finally {
    if (client) {
      client.release();
    }
  }
}

export class ContactRepository {
  static async getContacts(options: {
    page: number;
    limit: number;
    status?: string;
    search?: string;
  }): Promise<{ contacts: DatabaseContact[]; total: number; totalPages: number }> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const offset = (options.page - 1) * options.limit;

      let whereConditions: string[] = [];
      let queryParams: any[] = [];
      let paramIndex = 1;

      if (options.status) {
        whereConditions.push(`status = $${paramIndex}`);
        queryParams.push(options.status);
        paramIndex++;
      }

      if (options.search) {
        whereConditions.push(`(
          name ILIKE $${paramIndex} OR 
          email ILIKE $${paramIndex} OR 
          company ILIKE $${paramIndex} OR 
          subject ILIKE $${paramIndex}
        )`);
        queryParams.push(`%${options.search}%`);
        paramIndex++;
      }

      const whereClause = whereConditions.length > 0
        ? `WHERE ${whereConditions.join(' AND ')}`
        : '';

      const contactsQuery = `
        SELECT * FROM "ContactMessage" 
        ${whereClause}
        ORDER BY "createdAt" DESC 
        LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
      `;

      const countQuery = `
        SELECT COUNT(*) as total FROM "ContactMessage" ${whereClause}
      `;

      queryParams.push(options.limit, offset);

      const [contactsResult, countResult] = await Promise.all([
        client.query(contactsQuery, queryParams),
        client.query(countQuery, queryParams.slice(0, -2)),
      ]);

      const contacts = contactsResult.rows.map(this.mapRowToContact);
      const total = parseInt(countResult.rows[0].total);
      const totalPages = Math.ceil(total / options.limit);

      return { contacts, total, totalPages };
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw new Error('Failed to fetch contacts');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async create(
    contactData: ContactFormData,
    captchaScore?: number,
    ipAddress?: string,
    userAgent?: string
  ): Promise<DatabaseContact> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();

      const query = `
        INSERT INTO "ContactMessage" (
          name, email, phone, "countryCode", company, subject,
          "serviceInterest", "budgetRange", message,
          "isVerified", "captchaScore", "ipAddress", "userAgent", status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *
      `;

      const values = [
        contactData.name,
        contactData.email,
        contactData.phone,
        contactData.countryCode,
        contactData.company || null,
        contactData.subject,
        contactData.serviceInterest || null,
        contactData.budgetRange || null,
        contactData.message,
        false, // is_verified
        captchaScore || null,
        ipAddress || null,
        userAgent || null,
        'new',
      ];

      const result = await client.query(query, values);
      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error creating contact:', error);
      throw new Error('Failed to save contact information');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async getById(id: number): Promise<DatabaseContact | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const query = 'SELECT * FROM "ContactMessage" WHERE id = $1';
      const result = await client.query(query, [id]);

      if (result.rows.length === 0) {
        return null;
      }

      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw new Error('Failed to fetch contact');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async getAll(
    page: number = 1,
    limit: number = 20,
    status?: string,
    searchTerm?: string
  ): Promise<{ contacts: DatabaseContact[]; total: number; page: number; totalPages: number }> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const offset = (page - 1) * limit;

      let whereConditions: string[] = [];
      let queryParams: any[] = [limit, offset];
      let paramIndex = 3;

      if (status && status !== 'all') {
        whereConditions.push(`status = $${paramIndex}`);
        queryParams.push(status);
        paramIndex++;
      }

      if (searchTerm) {
        whereConditions.push(`(
          name ILIKE $${paramIndex} OR 
          email ILIKE $${paramIndex} OR 
          company ILIKE $${paramIndex} OR 
          subject ILIKE $${paramIndex}
        )`);
        queryParams.push(`%${searchTerm}%`);
        paramIndex++;
      }

      const whereClause = whereConditions.length > 0
        ? `WHERE ${whereConditions.join(' AND ')}`
        : '';

      const contactsQuery = `
        SELECT * FROM "ContactMessage" 
        ${whereClause}
        ORDER BY "createdAt" DESC 
        LIMIT $1 OFFSET $2
      `;

      const countQuery = `
        SELECT COUNT(*) as total FROM "ContactMessage" ${whereClause}
      `;

      const [contactsResult, countResult] = await Promise.all([
        client.query(contactsQuery, queryParams),
        client.query(countQuery, queryParams.slice(2)),
      ]);

      const contacts = contactsResult.rows.map(this.mapRowToContact);
      const total = parseInt(countResult.rows[0].total);
      const totalPages = Math.ceil(total / limit);

      return { contacts, total, page, totalPages };
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw new Error('Failed to fetch contacts');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async updateStatus(
    id: number,
    status: DatabaseContact['status'],
    adminNotes?: string,
    repliedBy?: string
  ): Promise<DatabaseContact | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();

      const query = `
        UPDATE "ContactMessage" 
        SET 
          status = $1::text, 
          "adminNotes" = COALESCE($2, "adminNotes"),
          "repliedAt" = CASE WHEN $1 = 'replied' THEN CURRENT_TIMESTAMP ELSE "repliedAt" END,
          "repliedBy" = COALESCE($3, "repliedBy"),
          "updatedAt" = CURRENT_TIMESTAMP 
        WHERE id = $4 
        RETURNING *
      `;

      const result = await client.query(query, [status, adminNotes || null, repliedBy || null, id]);

      if (result.rows.length === 0) {
        return null;
      }

      return this.mapRowToContact(result.rows[0]);
    } catch (error) {
      console.error('Error updating contact status:', error);
      throw new Error('Failed to update contact status');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async emailExists(email: string): Promise<boolean> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const query = 'SELECT id FROM "ContactMessage" WHERE email = $1 LIMIT 1';
      const result = await client.query(query, [email]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error checking email existence:', error);
      return false;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async getStats(): Promise<{
    total: number;
    new: number;
    inProgress: number;
    replied: number;
    closed: number;
    spam: number;
  }> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();

      const query = `
        SELECT 
          COUNT(*) as total,
          COUNT(*) FILTER (WHERE status = 'new') as new,
          COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress,
          COUNT(*) FILTER (WHERE status = 'replied') as replied,
          COUNT(*) FILTER (WHERE status = 'closed') as closed,
          COUNT(*) FILTER (WHERE status = 'spam') as spam
        FROM "ContactMessage"
      `;

      const result = await client.query(query);
      const row = result.rows[0];

      return {
        total: parseInt(row.total),
        new: parseInt(row.new),
        inProgress: parseInt(row.in_progress),
        replied: parseInt(row.replied),
        closed: parseInt(row.closed),
        spam: parseInt(row.spam),
      };
    } catch (error) {
      console.error('Error fetching contact stats:', error);
      throw new Error('Failed to fetch contact stats');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  private static mapRowToContact(row: any): DatabaseContact {
    return {
      id: row.id,
      name: row.name,
      email: row.email,
      phone: row.phone,
      countryCode: row.countryCode,
      company: row.company,
      subject: row.subject,
      serviceInterest: row.serviceInterest,
      budgetRange: row.budgetRange,
      message: row.message,
      isVerified: row.isVerified,
      captchaScore: row.captchaScore,
      ipAddress: row.ipAddress,
      userAgent: row.userAgent,
      status: row.status,
      adminNotes: row.adminNotes,
      repliedAt: row.repliedAt ? new Date(row.repliedAt) : undefined,
      repliedBy: row.repliedBy,
      createdAt: new Date(row.createdAt),
      updatedAt: new Date(row.updatedAt),
    };
  }
}

// -------------------- AdminRepository --------------------
export class AdminRepository {
  static async findByUsername(username: string): Promise<AdminUser | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const query = 'SELECT * FROM admin_users WHERE username = $1 AND is_active = true';
      const result = await client.query(query, [username]);

      if (result.rows.length === 0) {
        return null;
      }

      return this.mapRowToAdmin(result.rows[0]);
    } catch (error) {
      console.error('Error fetching admin user:', error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async verifyPassword(username: string, password: string): Promise<AdminUser | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const query = 'SELECT * FROM admin_users WHERE username = $1 AND is_active = true';
      const result = await client.query(query, [username]);

      if (result.rows.length === 0) {
        return null;
      }

      const admin = result.rows[0];
      const isValid = await bcrypt.compare(password, admin.password_hash);

      if (!isValid) {
        return null;
      }

      await this.updateLastLogin(admin.id);
      return this.mapRowToAdmin(admin);
    } catch (error) {
      console.error('Error verifying admin password:', error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async updateLastLogin(adminId: number): Promise<void> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      await client.query(
        'UPDATE admin_users SET last_login = CURRENT_TIMESTAMP WHERE id = $1',
        [adminId]
      );
    } catch (error) {
      console.error('Error updating last login:', error);
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async createAdmin(
    username: string,
    email: string,
    password: string,
    fullName: string,
    role: 'admin' | 'super_admin' = 'admin'
  ): Promise<AdminUser | null> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const passwordHash = await bcrypt.hash(password, 10);

      const query = `
        INSERT INTO admin_users (username, email, password_hash, full_name, role)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;

      const result = await client.query(query, [username, email, passwordHash, fullName, role]);
      return this.mapRowToAdmin(result.rows[0]);
    } catch (error) {
      console.error('Error creating admin user:', error);
      return null;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  private static mapRowToAdmin(row: any): AdminUser {
    return {
      id: row.id,
      username: row.username,
      email: row.email,
      fullName: row.full_name,
      role: row.role,
      isActive: row.is_active,
      lastLogin: row.last_login ? new Date(row.last_login) : undefined,
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    };
  }
}

// -------------------- ChatRepository --------------------
export class ChatRepository {
  static async saveConversation(data: {
    sessionId: string;
    userMessage: string;
    botResponse: string;
    keywords?: string[];
    actionTaken?: string;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<boolean> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();

      const query = `
        INSERT INTO chat_conversations (
          session_id, user_message, bot_response, keywords, 
          action_taken, user_ip, user_agent
        ) VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
      `;

      const values = [
        data.sessionId,
        data.userMessage,
        data.botResponse,
        data.keywords || null,
        data.actionTaken || null,
        data.ipAddress || null,
        data.userAgent || null,
      ];

      await client.query(query, values);
      return true;
    } catch (error) {
      console.error('Error saving chat conversation:', error);
      return false;
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async getChatHistory(
    page: number = 1,
    limit: number = 50,
    filters?: {
      sessionId?: string;
      isResolved?: boolean;
      startDate?: string;
      endDate?: string;
    }
  ): Promise<{ chats: any[]; total: number; totalPages: number }> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();
      const offset = (page - 1) * limit;

      let whereConditions: string[] = [];
      let queryParams: any[] = [];
      let paramIndex = 1;

      if (filters?.sessionId) {
        whereConditions.push(`session_id = $${paramIndex}`);
        queryParams.push(filters.sessionId);
        paramIndex++;
      }

      if (filters?.isResolved !== undefined) {
        whereConditions.push(`is_resolved = $${paramIndex}`);
        queryParams.push(filters.isResolved);
        paramIndex++;
      }

      if (filters?.startDate) {
        whereConditions.push(`created_at >= $${paramIndex}`);
        queryParams.push(filters.startDate);
        paramIndex++;
      }

      if (filters?.endDate) {
        whereConditions.push(`created_at <= $${paramIndex}`);
        queryParams.push(filters.endDate);
        paramIndex++;
      }

      const whereClause = whereConditions.length > 0
        ? `WHERE ${whereConditions.join(' AND ')}`
        : '';

      const chatsQuery = `
        SELECT * FROM chat_conversations
        ${whereClause}
        ORDER BY created_at DESC
        LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
      `;

      const countQuery = `
        SELECT COUNT(*) as total FROM chat_conversations ${whereClause}
      `;

      queryParams.push(limit, offset);

      const [chatsResult, countResult] = await Promise.all([
        client.query(chatsQuery, queryParams),
        client.query(countQuery, queryParams.slice(0, -2)),
      ]);

      const chats = chatsResult.rows;
      const total = parseInt(countResult.rows[0].total);
      const totalPages = Math.ceil(total / limit);

      return { chats, total, totalPages };
    } catch (error) {
      console.error('Error fetching chat history:', error);
      throw new Error('Failed to fetch chat history');
    } finally {
      if (client) {
        client.release();
      }
    }
  }

  static async getAnalytics(days: number = 30): Promise<any[]> {
    let client: PoolClient | null = null;
    try {
      client = await getDbClient();

      const query = `
        SELECT * FROM chat_analytics
        WHERE date >= CURRENT_DATE - INTERVAL '${days} days'
        ORDER BY date DESC
      `;

      const result = await client.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching chat analytics:', error);
      return [];
    } finally {
      if (client) {
        client.release();
      }
    }
  }
}
