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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
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

import Homepage from "./PageObjects/HomePage";
import Productpage from  "./PageObjects/ProductPage";

Cypress.Commands.add("selectProduct", (productName, quantity)=>{
    const HomePage = new Homepage();
    const ProductPage = new Productpage();

    HomePage.getSearchClick().click()
    HomePage.getSearchTextBox().type('Ceramic')
    HomePage.getSearchTextBox().type('{enter}')

    let products = ProductPage.getProductsName().each(($el)=>{


        let xy=$el.children().find('.card-title').text();
        if(xy.includes(productName)){
             cy.get($el).click();
            cy.log('the product is -> ' + xy)
        }
    })

    ProductPage.getAddtoCartButton().click().then(()=> {
            cy.get('a[href*="/checkout"]').click();
    })
})
