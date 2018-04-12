#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the stylelint-report-by-rule command.
 * @author isoppp
 */

const argv = process.argv
const cmd = argv[argv.length - 1]
const spawnSync = require('child_process').spawnSync

const cmdResult = spawnSync(cmd, { shell: true, maxBuffer: 10000 * 1024 })
const log = JSON.parse(cmdResult.stdout.toString())

const report = {}
log.forEach(item => {
  if (!item.errored) return

  item.warnings.forEach(warning => {
    const rule = warning.rule
    if (report[rule] == null) report[rule] = 0
    report[rule] += 1
  })
})

process.stdout.write(JSON.stringify(report, null, '\t'))
