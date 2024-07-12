'use server'

import { eq } from 'drizzle-orm';
import { db } from '@/db/client';
import { SelectUser, usersTable } from '../schema/schema';

// 查询用户数据
export async function getUserByEmail(email: string): Promise<SelectUser | undefined> {
  const result = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
  return result[0];
}
