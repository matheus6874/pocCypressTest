/// <reference path="./index.d.ts" />
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err)
  console.log(runnable)
  return false
})
