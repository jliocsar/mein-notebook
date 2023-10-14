import { stderr, exit } from 'node:process'
import * as fs from 'node:fs'
import * as path from 'node:path'

import type { Config } from 'drizzle-kit'
import * as C from 'colorette'

export type TDbCredentials = {
  url: string
  authToken: string
}

const dbCredentialsPath = path.resolve(import.meta.dir, '.notiz/database')
if (!fs.existsSync(dbCredentialsPath)) {
  stderr.write(
    `Database credentials not found at ${dbCredentialsPath}. Please create them by running ${C.cyanBright(
      'notiz auth',
    )}.`,
  )
  exit(1)
}
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
