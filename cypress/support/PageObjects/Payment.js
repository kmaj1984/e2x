class Payment{
    getCreditCard(){
        return cy.get('#ccNumber');
    }
    getExpiryOfCreditCard(){
        return cy.get('#ccExpiry');
    }
    getNameOfCreditCard(){
        return cy.get('#ccName');
    }
    getCvvOfCreditCard(){
        return cy.get('#ccCvv');
    }
    getCheckoutOfPaymentContinue(){
        return cy.get('#checkout-payment-continue');
    }
}
export default Payment