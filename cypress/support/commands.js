// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//const faker = require('@faker-js/faker')
import { faker } from '@faker-js/faker';

 Cypress.Commands.add('clickLink', (label) => { 
    cy.get('a').contains(label).click()
   
    
  })
  Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  })
  //cy.getByData("hero-heading")

  Cypress.Commands.add('NewUserSignup', (name,email) => { 
    //any email is pararmeterised so can be dynamic and execute same method
    // const name=faker.name.firstName();
    // const email=faker.internet.email()
    cy.get("[data-qa='signup-name']").type(name)
    cy.get("[data-qa='signup-email']").type(email)
    cy.get("[data-qa='signup-button']").click()
     })

  Cypress.Commands.add('getText', { prevSubject: 'element' }, 
  ($element) => {
    cy.wrap($element).scrollIntoView()
    return cy.wrap($element).invoke('text')
  }
)
//Waterskies1970!?   
Cypress.Commands.add ('selectProduct', (productName) => {
 // cy.get("[class='productinfo text-center']").each(($el, index,$list)=> {
  //  const clothsText= $el.find('p').text();
    cy.get("[class='productinfo text-center']").each(($el, index,$list)=> {
      const clothsText= $el.find('p').text();
    if(clothsText.includes(productName)){
     //cy.get(".btn.btn-default.add-to-cart i").eq(index).click({force: true});
     //.single-products .productinfo a
     
     cy.get('.single-products .productinfo a').eq(index).click({force: true});
     //cy.get('.product-image-wrapper > .single-products > .productinfo > .btn').eq(index).click({force: true});
    }
    
   })
  
 })



     
//Cypress.Commands.add('login', (email, password) => { ... })
//

// Cypress.Commands.add ('findElementWithText', (text) => {
//      cy.get (`span:contains ($ {text})`);
//      }

    //  Cypress.Commands.add('logout', () => {
    //     cy.contains('Login').should('not.exist')
    //     cy.get('.avatar').click()
    //     cy.contains('Logout').click()
    //     cy.get('h1').contains('Login')
    //     cy.getCookie('auth_key').should('not.exist')
    //   })
    // Cypress.Commands.add("userInput", (searchTxt) => {
    //     //to input search text in Google and perform search
    //     cy.get("input[type='text']").type(searchTxt);
    //     cy.contains("Google Search").click();
    //  })
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })