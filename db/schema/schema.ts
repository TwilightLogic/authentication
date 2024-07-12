import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(), 
  createdAt: timestamp('created_at').notNull().defaultNow(), 
  updatedAt: timestamp('updated_at').notNull().defaultNow().$onUpdate(() => new Date()), 
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;