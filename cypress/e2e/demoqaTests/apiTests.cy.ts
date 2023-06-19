import loc from '../../support/locators'
import { GenetareDataFakeBuilder } from '../builders/GenetareDataFakeBuilder'
import validaSchema from '../../support/validateSchema'

describe('Contracts Tests', () => {
  let fakeBuilder: GenetareDataFakeBuilder

  beforeEach(() => {
    fakeBuilder = new GenetareDataFakeBuilder()
    }
  )

  it('validade contract api Books', () => {
    cy.callApi('/Books').then(
        (response: { body: any; status: number }) => {
          expect(response.status).eq(200)
          validaSchema('booksSchema', response.body)
        }
      )
    });

    it('validade contract api Books - get specific book', () => {
        cy.callApi('/Book?ISBN=9781449325862').then(
            (response: { body: any; status: number }) => {
              expect(response.status).eq(200)
              validaSchema('booksSchema', response.body)
            }
          )
    });


    it('validade contract api Books - book not found', () => {
        cy.callApi('/Book?ISBN=000000').then(
            (response: { body: any; status: number }) => {
              expect(response.status).eq(400)
              validaSchema('bookNotFoundSchema', response.body)
            }
          )
    });
})

