describe('Challenging DOM', () => {
  it('Challenging DOM', () => {

    cy
      .visit('/challenging_dom')
  
    cy
      .get('.button')
      .not('.alert,.success')
  
    cy
      .get('.button')
      .filter('.alert')
  
    cy
      .get('.button')
      .filter('.success')
  
    cy
      .contains('Iuvaret0')
    cy
      .contains('Apeirian1')
    cy
      .contains('Adipisci2')
    cy
      .contains('Definiebas3')
    cy
      .contains('Consequuntur4')
    cy
      .contains('Phaedrum5')
  
    cy
      .get('tbody tr')
      .eq(6)
      .contains('edit')
  
    cy
      .get('tbody tr')
      .eq(7)
      .contains('delete')
  
    cy
      .get('#canvas')
  
  });
})