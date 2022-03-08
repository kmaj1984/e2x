class Shipping{
    getFirstName(){
    return cy.get('#firstNameInput');
    }
    getLastName(){
        return cy.get('#lastNameInput');
    }
    getAddress(){
        return cy.get('#addressLine1Input');
    }
    getCity(){
        return cy.get('#cityInput');
    }
    getPostCode(){
        return cy.get('#postCodeInput');
    }
    getPhoneNumber(){
        return cy.get('#phoneInput');
    }
    getSameBillingAddressCheckbox(){
        return cy.get('#sameAsBilling');
    }
    getContinue(){
        return cy.get('#checkout-shipping-continue');
    }
}
export default Shipping