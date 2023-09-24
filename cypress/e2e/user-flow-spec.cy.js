describe("user flow", () => {
  const endpointsURL = "https://www.dnd5eapi.co/api";
  beforeEach(() => {
    cy.intercept("GET", endpointsURL, { fixture: "endpoints.json" }).as(
      "getEndpoints"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races', { fixture: "races.json" }).as(
      "getRaces"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/backgrounds', { fixture: "backgrounds.json" }).as(
      "getBackground"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes', { fixture: "classes.json" }).as(
      "getClasses"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/ability-scores', { fixture: "abilityScores.json" }).as(
      "getAbilities"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/dwarf', { fixture: "dwarf.json" }).as(
      "getDwarf"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/rogue', { fixture: "rogue.json" }).as(
      "getRogue"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/half-orc', { fixture: "halforc.json" }).as(
      "getHalfOrc"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/elf', { fixture: "elf.json" }).as(
      "getElf"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/human', { fixture: "human.json" }).as(
      "getHuman"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/dragonborn', { fixture: "dragonborn.json" }).as(
      "getDragonborn"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/half-elf', { fixture: "halfelf.json" }).as(
      "getHalfElf"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/halfling', { fixture: "halfling.json" }).as(
      "getHalfling"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/tiefling', { fixture: "tiefling.json" }).as(
      "getTeifling"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/backgrounds/acolyte', { fixture: "acolyte.json" }).as(
      "getAcolyte"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/wizard', { fixture: "wizard.json" }).as(
      "getWizard"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/sorcerer', { fixture: "sorcerer.json" }).as(
      "getSorcerer"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/warlock', { fixture: "warlock.json" }).as(
      "getWarlock"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/barbarian', { fixture: "barbarian.json" }).as(
      "getBarbarian"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/paladin', { fixture: "paladin.json" }).as(
      "getPaladin"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/cleric', { fixture: "cleric.json" }).as(
      "getCleric"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/bard', { fixture: "bard.json" }).as(
      "getBard"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/monk', { fixture: "monk.json" }).as(
      "getMonk"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/druid', { fixture: "druid.json" }).as(
      "getClasses"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/classes/fighter', { fixture: "fighter.json" }).as(
      "getClasses"
    );
    cy.intercept("GET", 'https://www.dnd5eapi.co/api/races/gnome', { fixture: "classes.json" }).as(
      "getClasses"
    );
    cy.visit("http://localhost:3000/");
  });

  it("see home page and select random character", () => {
    cy.get("header").contains("h1", "Adventurer Alchemist");
    cy.get('input[type="text"]').should('be.visible');
    cy.get('.random-button').should('be.visible')
    cy.get('.favorite-nav').contains("h5", "My Character");
    cy.get('.favorite-nav').find("img").should('be.visible');
    cy.get('input[type="text"]').type('Barry').should('have.value', "Barry");
    cy.get('.random-button').click();           
  });
});
