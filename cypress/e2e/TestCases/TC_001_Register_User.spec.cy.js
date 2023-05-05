///// <reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('example to-do app', () => {
//     beforeEach(() => {
//        // 1. Launch browser
// //2. Navigate to url 'http://automationexercise.com'
//            cy.visit('/')
//            })
        // beforeEach('some description', function() {
        //      cy.visit('/')
        //     // Steps which need to be executed before each test case
        //   });
//4. Click on 'Signup / Login' button
           it('Click on Signup / Login button', () => {
            cy.visit('/')
                  cy.clickLink('Signup / Login')

                  cy.get('div.signup-form h2').getText()
        //  write test data
                 const name=faker.name.firstName();
                 const email=faker.internet.email()
                 cy.NewUserSignup(name,email)
                 cy.log(name)
                 cy.log(email)
                 cy.get('[data-qa="name"]').should('have.value',name)
                 cy.get('[data-qa="email"]').should('have.value',email)
                 
                
                 

      })
//
})
    //})