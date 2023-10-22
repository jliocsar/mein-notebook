import * as fs from 'node:fs'
import * as path from 'node:path'
import { env, stderr, exit } from 'node:process'

import type { Config } from 'drizzle-kit'
import Cryptify from 'cryptify'
import * as C from 'colorette'

export type TDbCredentials = {
  url: string
  authToken: string
}

const HOME = env.HOME!
const SECRET = env.NOTIZ_SECRET!
if (!SECRET) {
  stderr.write(`Env. variable ${C.blueBright('NOTIZ_SECRET')} not found.`)
  exit(1)
}

const dbCredentialsPath = path.resolve(HOME, '.notiz/database')
if (!fs.existsSync(dbCredentialsPath)) {
  stderr.write(
    `Database credentials not found at ${dbCredentialsPath}. Please create them by running ${C.cyanBright(
      'notiz auth',
    )}.`,
  )
  exit(1)
}
const crypt = new Cryptify(
  dbCredentialsPath,
  SECRET,
  undefined,
  'utf-8',
  true,
  true,
)
await crypt.decrypt()
const dbCredentials = fs.readFileSync(dbCredentialsPath)
await crypt.encrypt()

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'turso',
  dbCredentials: JSON.parse(dbCredentials.toString()) as TDbCredentials,
  breakpoints: true,
  strict: true,
  // verbose: true,
} satisfies Config
