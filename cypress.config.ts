import { defineConfig } from 'cypress'

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.latlong.net/',
  },
  env: {
    emailNotRegistered: 'matheus.teste@gmail.com',
    emailNotVerify: 'primeiropfapp2@mailsac.com',
    emailWithRegister: 'primeiropfapp@mailsac.com',
    invalidEmail: '123@123',
    password: 'teste@1000',
    baseUrlDemoqa: 'https://demoqa.com/BookStore/v1',
  },
  chromeWebSecurity: false
});
