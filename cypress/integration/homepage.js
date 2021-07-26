const ticker = Cypress.env("ticker");
describe("renders the home page", () => {
  it("renders home page correctly", () => {
    cy.visit("/");
    cy.get("#container").should("exist");
  });
  it("renders ticker correctly", () => {
    cy.visit("/landing-page");
    cy.findByText(ticker).should("exist");
  });
  it("routes to ticker detail", () => {
    cy.visit("/");
    cy.findByText("Explore").click();
    cy.findAllByText(ticker).click();
    cy.url().should("include", ticker);
    cy.findByText("Apple Inc.").should("exist");
  });
});
