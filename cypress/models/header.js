class Header {

    imgLogo = () => cy.get('[data-test="navbar.logoUlovDomov"]');
    btnInsertOffer = () => cy.get('[data-test="navbar.content.addOffer"]');
    btnMainMenu = () => cy.get('[data-test="navbar.hamburgerButton"]');
    navMenu = () => cy.get('[data-test="leftDrawer"]');
}
module.exports = new Header();