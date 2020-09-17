// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url and check the users listing", () => {
    cy.visit("/");
    cy.contains("h2", "👥 Users");
  });

  it("It should be able to filter data", () => {
    cy.visit("/");
    cy.get("tr").should('have.length', 6);
    cy.get("input").type("a");
    cy.get("tr").its('length').should('be.gte', 6);
    cy.get("input").clear();
  });

  it("It should paginate", () => {
    cy.visit("/");
    cy.contains("button", "Next").click();
    cy.contains("button", "Prev").click();
  });
});
