/// <reference types="cypress"/>
// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Your Vue.js + TypeScript App');
  });
});

describe('TypeScript', () => {
  it('works', () => {
    // note TypeScript definition
    const x: number = 42;
  });

  it('checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe',
    };
    expect(object).to.have.all.keys('name', 'age');
  });

  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {});
  });

  it('tests our example site', () => {
    cy.visit('https://example.cypress.io/');
    cy.get('.home-list')
      .contains('Querying')
      .click();
    cy.get('#query-btn').should('contain', 'Button');
  });

  // enable once we release updated TypeScript definitions
  it('has Cypress object type definition', () => {
    expect(Cypress.version).to.be.a('string');
  });

});
