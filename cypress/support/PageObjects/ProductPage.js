class ProductPage{

    getProductsName() {
        return cy.get('ul.productGrid').children();
    }

    getAddtoCartButton() {
        return cy.get('#form-action-addToCart');
    }

    getSelectQuantity() {
        return cy.get('#qty[]');
    }
}
export default ProductPage