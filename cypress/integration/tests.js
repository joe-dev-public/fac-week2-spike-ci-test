it("Has an <h1> saying 'Hello world'", () => {
  cy.visit('http://localhost:3333/');
  cy.get('h1').contains('Hello world');
});
