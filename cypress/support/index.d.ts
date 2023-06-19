/// <reference types="cypress"/>

declare namespace Cypress {
    interface Chainable {
      validateTittle(title: string): void
      validateTextBody(text: string): void
      login(email :string,password:string) :void
      callApi(endPoint:string): any
    }
  }
  