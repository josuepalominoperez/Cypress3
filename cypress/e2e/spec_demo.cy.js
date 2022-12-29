///<reference types="cypress"/>

  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type("Youtube{Enter}")
    cy.get('[href="https://www.youtube.com/?hl=es"] > .LC20lb').click({ force: true })
  })

  



 