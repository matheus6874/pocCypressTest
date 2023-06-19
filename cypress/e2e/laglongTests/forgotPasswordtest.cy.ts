import loc from '../../support/locators'
import { GenetareDataFakeBuilder } from '../builders/GenetareDataFakeBuilder'

describe('Forgot your password tests', () => {
  let fakeBuilder: GenetareDataFakeBuilder

  beforeEach(() => {
    fakeBuilder = new GenetareDataFakeBuilder()
    cy.visit('/user/forgot-password')
    cy.validateTittle('Forgot your password?')
   
    }
  )

  it('validade input invalid e-mail', () => {
        cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('invalidEmail'))
        cy.get(loc.FORGOT_PASSWORD_PAGE.BTN_RESET_PASSWORD).click()
        cy.validateTextBody('Invalid email address.')
    });

    it('validate input email not registered', () => {
        cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('emailNotRegistered'))
        cy.get(loc.FORGOT_PASSWORD_PAGE.BTN_RESET_PASSWORD).click()
        cy.validateTextBody('User not found. Please register to login.')
     });

     it.only('validate send e-mail with instructions for reset password', () => {
        cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(Cypress.env('emailWithRegister'))
        cy.get(loc.FORGOT_PASSWORD_PAGE.BTN_RESET_PASSWORD).click()
        cy.validateTextBody('Password reset instructions sent to your email. Please check it.')
     });
})

