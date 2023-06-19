import loc from '../../support/locators'

describe('Login tests', () => {

  beforeEach(() => {
    cy.visit('/user/login')
    cy.validateTittle('User Login')
    }
  )

  it('valdate user with email not registered', () => {
    cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('emailNotRegistered'))
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type('12345')
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody(' Your password must be at least 6 characters.')
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Incorrect username!')
  })

  it('valdate user with e-mail not verify', () => {
    cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('emailNotVerify'))
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Please verify your email address by clicking the activation link.')
  })

  it('valdate user e-mail verify', () => {
    cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('emailWithRegister'))
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Welcome Matheus Cristino')
  })
})

