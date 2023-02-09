
describe('Testing home page', () => {

  it('Home loads correctly', () => {
    cy.visit('');

    // Validate headings
    cy.get('.heading').should('have.text', 'Welcome to the-internet');
    cy.get('h2').should('have.text', 'Available Examples');

    // Validate links props
    cy.fixture('availableExamples').then(({ availableExamples }) => {
      availableExamples.forEach((example) => {
        cy.get(`a[href="${example.href}"]`).should('have.text', example.content);
      })
    });

    // Validate github fork img source
    cy.get('img[src="/img/forkme_right_green_007200.png"]').should('be.visible');
  });

})