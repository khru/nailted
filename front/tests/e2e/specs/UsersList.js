// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url and check the users listing", () => {
    cy.visit("/");
    cy.contains("h2", "👥 Users");
  });
});
