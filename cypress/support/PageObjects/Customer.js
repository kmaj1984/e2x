class Customer {
    getEmail() {
        return cy.get('#email');
    }
    getAcceptPrivacyPolicy(){
        return cy.get('[for=privacyPolicy]');
    }
    getContinueCustomerButton() {
        return cy.get('#checkout-customer-continue');
    }
}
export default Customer