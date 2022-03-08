import Homepage from "../support/PageObjects/HomePage";
import ProductPage from "../support/PageObjects/ProductPage";
import Customer from "../support/PageObjects/Customer";
import Shipping from "../support/PageObjects/Shipping";
import Payment from "../support/PageObjects/Payment";

describe('a user can place an order', function () {
    before(function () {
        cy.fixture('data').then(function (data) {
            this.data = data;
        })
    })

    it('can proceeed with the payment checkout', function () {
        const homePage = new Homepage();
        const productPage = new ProductPage();
        const customer = new Customer();
        const shipping = new Shipping();
        const payment = new Payment();

        cy.visit(Cypress.env('url'));
        cy.selectProduct(this.data.product_name, '1');

        customer.getEmail().type(this.data.email);
        customer.getAcceptPrivacyPolicy().click();
        customer.getContinueCustomerButton().click();

        shipping.getFirstName().type(this.data.name_first);
        shipping.getLastName().type(this.data.name_last);
        shipping.getAddress().type(this.data.address);
        shipping.getCity().type(this.data.city);
        shipping.getPostCode().type(this.data.postcode);
        shipping.getPhoneNumber().type(this.data.phone_number);
        shipping.getContinue().click();

        payment.getCreditCard().type(this.data.credit_card);
        payment.getExpiryOfCreditCard().type(this.data.credit_card_expiry);
        payment.getNameOfCreditCard().type(this.data.credit_card_name);
        payment.getCvvOfCreditCard().type(this.data.credit_card_Cvv);
        payment.getCheckoutOfPaymentContinue().click();

    })
})