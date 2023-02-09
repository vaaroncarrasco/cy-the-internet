import { BasicAuth } from '../fixtures/examplesEndpoints.json'

describe('Validate Basic Auth page', () => {

  it('Basic Auth prompt works with valid credentials', () => {
    cy
      .visit(BasicAuth, {
        auth: {
          username: 'admin',
          password: 'admin'
        }
      })

    cy
      .location('pathname')
      .should('eq', '/basic_auth')

    cy
      .contains('h3', 'Basic Auth')
      .should('be.visible')

    cy
      .contains('p', 'Congratulations! You must have the proper credentials.')
      .should('be.visible')
  })

  // Validate Basic Auth with invalid credentials

})