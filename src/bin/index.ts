import { parseArgs } from "node:util"
import { author, name, version } from "~/package.json"

const parse: typeof parseArgs = (config) => {
  try {
    return parseArgs(config)
  } catch (err: any) {
    console.error(err.message)
    process.exit(1)
  }
}

const { values } = parse({
  allowPositionals: true,
  options: {
    help: { type: "boolean", short: "h" },
    version: { type: "boolean", short: "v" },
  },
})

if (values.version) {
  console.log(`
${name}@${version}`)
  process.exit(0)
}

if (values.help) {
  console.log(`
${name}@${version}

Usage:
  ${name} [options]

Options:
  -h, --help     Display help
  -v, --version  Display version 

Info:
  ${author.name} <${author.url}>`)
  process.exit(0)
}
