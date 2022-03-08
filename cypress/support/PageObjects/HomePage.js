class Homepage{
    
    getSearchClick() {
        return cy.get('button[id="quick-search-expand"]');
    }

    getSearchTextBox(){
        return cy.get('#nav-quick-search');
    }
}
export default Homepage