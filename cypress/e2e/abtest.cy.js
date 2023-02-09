// import fixture
import { ABTesting } from '../fixtures/examplesEndpoints.json';

describe('Validate A/B page', () => {

  beforeEach(() => {
    cy.visit(ABTesting);
  })

  it('A/B page loads correctly', () => {
    cy.get('h3').should('have.text', 'A/B Test Control');
    cy.get('p').should('have.text', 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
    // Validate github fork img source
    cy.get('img[src="/img/forkme_right_green_007200.png"]').should('be.visible');
  })

})