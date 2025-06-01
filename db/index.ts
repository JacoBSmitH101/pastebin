import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

let db: Database | null = null;

export async function initDb(): Promise<void> {
  db = await open({
    filename: './pastebin.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS pastes (
      id TEXT PRIMARY KEY,
      content TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      viewsLeft INTEGER,
      encrypted INTEGER DEFAULT 0
    );
  `)
  console.log("Connected");
}

export function getDb(): Database {
  if (!db) throw new Error("DB not init");
  return db;
}
