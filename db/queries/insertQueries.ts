import { db } from '../index';
import { InsertUser, usersTable } from '../schema/schema';

// 插入用户数据
export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}
