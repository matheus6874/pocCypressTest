import Ajv from 'ajv'

const ajv = new Ajv({ allErrors: true, verbose: true })

const validateSchema = (jsconSchema: any, body: any) => {
  cy.fixture(jsconSchema).then(jsconSchema => {
    const valid = ajv.validate(jsconSchema, body)
    if (!valid) {
      throw new Error('contract failure' + ajv.errors)
    }
  })
}

export default validateSchema
