'use server'

import { InsertUser, usersTable } from '@/db/schema/schema';
import { db } from '@/db/client';

// 插入用户数据
export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}
