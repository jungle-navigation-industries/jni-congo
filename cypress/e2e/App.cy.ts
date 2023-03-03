describe("home", () => {
  it("works", () => {
    cy.visit("/");

    cy.contains(/jungle navigation industries/i);
  });
});
