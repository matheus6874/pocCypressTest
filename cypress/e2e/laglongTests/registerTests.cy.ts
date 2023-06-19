import loc from '../../support/locators'
import { GenetareDataFakeBuilder } from '../builders/GenetareDataFakeBuilder'

describe('Register tests', () => {
  let fakeBuilder: GenetareDataFakeBuilder

  beforeEach(() => {
    fakeBuilder = new GenetareDataFakeBuilder()
    cy.visit('/user/register')
    cy.validateTittle('Register')
    }
  )

  it('validade input recaptcha not filled', () => {
    cy.get(loc.REGISTER_PAGE.INPUT_FIRST_NAME).type(fakeBuilder.generateName())
    cy.get(loc.REGISTER_PAGE.INPUT_SUR_NAME).type(fakeBuilder.generateName())
    cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(fakeBuilder.generateEmail())
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type(Cypress.env('password'))
    cy.get(loc.REGISTER_PAGE.INPUT_PASSWORD2).type(Cypress.env('password'))
    cy.get(loc.REGISTER_PAGE.CHECK_BOT_TERMS_OF_USE).click()
    cy.get(loc.REGISTER_PAGE.BTN_REGISTER).click()
    cy.validateTextBody('Please fill the form fields.')
    });
})

