describe("user flow", () => {
  const endpointsURL = "https://www.dnd5eapi.co/api";
  beforeEach(() => {
    cy.intercept("GET", endpointsURL, { fixture: "endpoints.json" }).as(
      "getEndpoints"
    );
    cy.intercept("GET", "https://www.dnd5eapi.co/api/races", {
      fixture: "races.json",
    }).as("getRaces");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/backgrounds", {
      fixture: "backgrounds.json",
    }).as("getBackground");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/classes", {
      fixture: "classes.json",
    }).as("getClasses");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/ability-scores", {
      fixture: "abilityScores.json",
    }).as("getAbilities");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/races/dwarf", {
      fixture: "dwarf.json",
    }).as("getDwarf");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/races/dragonborn", {
      fixture: "dragonborn.json",
    }).as("getDragonborn");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/classes/barbarian", {
      fixture: "barbarian.json",
    }).as("getBarbarian");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/classes/bard", {
      fixture: "bard.json",
    }).as("getBard");
    cy.intercept("GET", "https://www.dnd5eapi.co/api/backgrounds/acolyte", {
      fixture: "acolyte.json",
    }).as("getAcolyte");
    cy.visit("http://localhost:3000/");
  });

  it("see home page and select random character", () => {
    cy.get("header").contains("h1", "Adventurer Alchemist");
    cy.get('input[type="text"]').should("be.visible");
    cy.get(".random-button").should("be.visible");
    cy.get(".favorite-nav").contains("h5", "My Character");
    cy.get(".favorite-nav").find("img").should("be.visible");
    cy.get('input[type="text"]').type("Barry");
    cy.get('input[type="text"]').should("have.value", "Barry");
    cy.get(".random-button").click();
    cy.get(".character-wrapper")
      .parent()
      .children()
      .children()
      .get(".class-container h2")
      .contains("Name: Barry")
      .should("exist");
    cy.get(".character-wrapper")
      .parent()
      .children()
      .children().children()
      .get('.class-container')
      .get(".character-background h2")
      .contains("Background: Acolyte")
      .should("exist");
  });
});
