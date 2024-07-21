'use client'

import { InsertUser, usersTable } from '@/db/schema/schema';
import { db } from '@/db/client';

export async function createUser(data: InsertUser) {
  console.log('data from insert', data);
  

  const result = await db
    .insert(usersTable)
    .values(data)
    .returning({ id: usersTable.id, name: usersTable.name, email: usersTable.email, createdAt: usersTable.createdAt, updatedAt: usersTable.updatedAt });

  return result[0];
}
