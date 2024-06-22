import { InferInsertModel, InferSelectModel, sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const open_source_projects = sqliteTable("open_source_projects", {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description").notNull(),
  website: text("website").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  visible: integer("visible").notNull().default(0),
});

export const users = sqliteTable("users", {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  email: text("email").unique(),
  password: text("name").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: text("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type User = InferSelectModel<typeof users>;
export type OpenSourceProject = InferSelectModel<typeof open_source_projects>;
export type NewOpenSourceProject = InferInsertModel<
  typeof open_source_projects
>;
