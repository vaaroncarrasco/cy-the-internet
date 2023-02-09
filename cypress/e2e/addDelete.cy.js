import { AddRemoveElements } from '../fixtures/examplesEndpoints.json'

describe('Validate Add/Remove Elements page', () => {

  beforeEach(() => {
    cy.visit(AddRemoveElements);
  })

  it('Add/Remove Elements page loads correctly', () => {
    cy.get('h3').should('have.text', 'Add/Remove Elements');
    // Validate github fork img source
    cy.get('img[src="/img/forkme_right_green_007200.png"]').should('be.visible');
    // Validate Add Element button
    cy.get('button[onclick="addElement()"]').should('have.text', 'Add Element');

    // Validate div with id="elements" has no buttons inside
    cy.get('#elements').should('not.have.descendants');
  })

  it('Add/Remove Elements page adds and removes elements', () => {

    // Validate div with id="elements" has no buttons inside
    cy.get('#elements').find('button').should('not.exist');

    // Click Add Element button 3 times and validate it adds 3 buttons
    cy.get('button[onclick="addElement()"]').click().click().click();
    cy.get('#elements').find('button').should('have.length', 3);
    cy.get('div').find('button').contains('Delete').should('exist');

    // Click Delete button and validate it removes 1 button
    cy.get('div').find('button').contains('Delete').click();
    cy.get('#elements').find('button').should('have.length', 2);

  })

})