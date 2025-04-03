class ListingsPage {
    searchScroller = () => cy.get('#search-scroller');
    mapOfLeases = () => cy.get('canvas[aria-label="Map"]')
    scrollerTopSection = () => cy.get('[data-test="searchTopSection"]');
    scrollerHeadingSection = () => cy.get('h1.chakra-heading');
    buttonFilter = (text) => this.scrollerTopSection().contains('button', text);
    buttonWatchdog = (text) => this.scrollerTopSection().contains('button', text);
    countOfOffers = () => cy.get('[data-test="countOfOffers"]');
    selectFilterBy = (text) => cy.contains('select', text);
}

module.exports = new ListingsPage();