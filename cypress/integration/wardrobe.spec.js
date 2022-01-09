/// <reference types="cypress" />

context('Wardrobe assessment', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('Search input works correctly - Correct value', () => {
    cy.get('#filled-basic')
      .type('bandas')
      .get(':nth-child(1) > .css-1p7dbmj')
      .should('be.visible')
  })
  it('Search input works correctly - Incorrect value', () => {
    cy.get('#filled-basic')
      .type('camiseta')
      .not(':nth-child(1) > .css-1p7dbmj')
  })
})
