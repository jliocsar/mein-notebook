import * as fs from 'node:fs'
import * as path from 'node:path'

import type { Config } from 'drizzle-kit'

export type TDbCredentials = {
  url: string
  authToken: string
}

const dbCredentialsPath = path.resolve(
  import.meta.dir,
  '.meine-notebook/database.json',
)
const dbCredentials = fs.readFileSync(dbCredentialsPath)

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'turso',
  dbCredentials: JSON.parse(dbCredentials.toString()) as TDbCredentials,
  breakpoints: true,
  strict: true,
  // verbose: true,
} satisfies Config
