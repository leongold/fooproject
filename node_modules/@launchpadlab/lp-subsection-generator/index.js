#!/usr/bin/env node

const fs = require('fs-extra')
const glob = require('glob')
const camelCase = require('lodash.camelcase')
const kebabCase = require('dashify')
const path = require('path')

function generate (subSectionName, destination) {
  // Compute all casings
  const camelCaseName = camelCase(subSectionName)
  const kebabCaseName = kebabCase(subSectionName)
  const pascalCaseName = pascalCase(subSectionName)
  // Compute paths
  const packagePath = getPackagePath()
  const root = process.cwd()
  // GENERATE
  console.log('Generating...')
  // Copy files over
  fs.copySync(path.resolve(packagePath, './template'), path.resolve(packagePath, `./${ camelCaseName }`))
  // Replace template variables in files
  const allFiles = glob.sync(path.resolve(packagePath, `./${ camelCaseName }/**/*.js`))
  allFiles.forEach(file => {
    const template = fs.readFileSync(file, 'utf8')
    const result = template
      .replace(/%sub-section%/g, kebabCaseName)
      .replace(/%subSection%/g, camelCaseName)
      .replace(/%SubSection%/g, pascalCaseName)
    return fs.writeFileSync(file, result)
  })
  // Rename view file
  fs.renameSync(path.resolve(packagePath, `./${ camelCaseName }/views/SubSection.js`), path.resolve(packagePath, `./${ camelCaseName }/views/${ pascalCaseName }.js`))
  // Move to final dest
  fs.moveSync(path.resolve(packagePath, `./${ camelCaseName }`), path.resolve(root, destination, camelCaseName))
  console.log('Done!')
}

function getPackagePath () {
  try {
    return path.resolve(require.resolve('@launchpadlab/lp-subsection-generator'), '../')
  } catch (e) {
    console.log('Path not found, running locally')
    return __dirname
  }
}

function pascalCase (str) {
  const cased = camelCase(str)
  return cased.charAt(0).toUpperCase() + cased.slice(1)
}

function main () {
  const args = process.argv.slice(2)
  const subSectionName = args[0] || 'sub-section'
  const destination = args[1] || './src'
  return generate(subSectionName, destination)
}

if (!module.parent) main()