
import loc from '../support/locators'


const relativeWait = 3000

Cypress.Commands.add('validateTittle', tittle => {
    cy.title().should('be.equal', tittle)
})

Cypress.Commands.add('validateTextBody', text => {
    cy.get('body', { timeout: relativeWait }).should('contain', text)
})

Cypress.Commands.add('login', (email,password) => {
    cy.get(loc.COMMON_PAGE.INPUT_EMAIL).type(email)
    cy.get(loc.COMMON_PAGE.INPUT_PASSWORD).type(password)
    cy.get(loc.USER_LOGIN_PAGE.BTN_LOGIN).click()
    cy.validateTextBody('Welcome Matheus Cristino')
})

Cypress.Commands.add('callApi', endPoint => {
    cy.request({
      method: 'GET',
      failOnStatusCode: false,
      url: `${Cypress.env('baseUrlDemoqa')}${endPoint}`,
    }).then(response => {
      return response
    })
  })

  