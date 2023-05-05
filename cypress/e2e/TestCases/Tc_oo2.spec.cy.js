///<reference types ="Cypress"> />
describe('my first test suite', () => {
   
    before(function() {
        cy.fixture('product').then(function(data){
            globalThis.data=data;
        })  
    });
    it('passes  ddd', () => {

        cy.visit("https://www.automationexercise.com/")
        //    cy.url().should('include','automationexercise')
        //    cy.title().should('eq','Automation Exercise')
        // beforeEach('some description', function() {
        //     cy.visit('/')
        //     // Steps which need to be executed before each test case
        //   });
          // cy.get("[class='productinfo text-center']").eq(0).contains('Add to cart').click();
        // selectProduct   Men Tshirt
         cy.selectProduct('Stylish Dress').should('be.visible');

         //this.data.productName
         globalThis.data.productName.forEach(function(element){
            //console.log(element);
            cy.selectProduct(element[0])
         })
        

    
})
})

