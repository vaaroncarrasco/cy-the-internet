import { BrokenImages } from '../fixtures/examplesEndpoints.json'

describe('Validate broken images page', () => {

  it('Broken images', () => {

    cy
      .intercept('GET', '/img/avatar-blank.jpg')
      .as('avatar')

    cy
      .intercept('GET', '/hjkl.jpg')
      .as('hjkl')

    cy
      .intercept('GET', '/asdf.jpg')
      .as('asdf')

    cy
      .visit(BrokenImages)

    cy
      .wait('@hjkl')
      .its('response.statusCode')
      .should('not.eq', 404)

    cy
      .wait('@asdf')
      .its('response.statusCode')
      .should('not.eq', 404)

    cy
      .wait('@avatar')
      .its('response.statusCode')
      .should('not.eq', 404)

  });
})