describe("months", () => {
  const month = "June";
  const year = 2020;

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("can visit the landing page and show current month and year as the route", () => {
    cy.visit(`http://localhost:3000/${year}/06`);
  });

  it("shows the current month and year", () => {
    cy.contains(`${month} ${year}`);
  });

  it("shows the previous month and checks its number of days", () => {
    cy.get("#prev-month").click();
    cy.contains("May");
    cy.contains(31);
  });

  it("shows the next month and checks its number of days", () => {
    cy.get("#next-month").click();
    cy.contains("July");
    cy.contains(31);
  });

  it("shows the month after the next and the content being released", () => {
    cy.get("#next-month").click();
    cy.get("#next-month").click();
    cy.contains("August");
    cy.contains("Sandy Waxer");
    cy.contains("Brighter");
  });

});
