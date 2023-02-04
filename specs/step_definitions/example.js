import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login.html')
cy.get('#email').type(email)
cy.get('#password').type(password)
cy.get('[type="submit"]').click()
cy.url().should('equal', 'http://localhost:7655/')
})

// Givet att jag ör inne på sidan och loggat in
Given('I am on the login page', () => {
    cy.visit('/login.html')
    cy.get('#login').should('be.visible')
    cy.wait(200)
});

// när jag loggar in med rätt info sker följande
When('I enter valid info', () => {
    cy.get('#email').type('exempel@school.net');
    cy.get('#password').type('abc123');
    cy.get('[type="submit"]').click()
    cy.url().should('equal', 'http://localhost:7655/')
});

// När jag har inkorrekt info sker följande 
When('I enter invalid info', () => {
    cy.get('#email').type('exempel@skola.net');
    cy.get('#password').type('123abc');
    cy.get('[type="submit"]').click()
});

// Sen borde jag se vara på nodehill sidan
Then('I should see Nodehill Logo in schedule page', () => {
    cy.get('img').should('be.visible')
});

// verifiera inlogg--- Godkänt
Then('Login is successful', () => {
    cy.get('header > table > thead > tr > :nth-child(6) > div > a').should('be.visible')
});

// sen, login är godkänt
Then('Login is unsuccessful', () => {
    cy.url().should('include', '/login.html')
});

// Givet att ja borde logga in och se logo i schema sidan 
Given('I should be logged in and see logo in schedule page', () => {
  cy.url().should('include', 'http://localhost:7655')
  cy.get('img').should('be.visible')
});
   
// När ja klickar på admin
When('I click on the admin button', () => {
cy.visit('http://localhost:7655/admin')
});
// sen gå till admin
Then('I visit the admin page', () => {
  cy.url().should('include', 'http://localhost:7655/admin');
});
