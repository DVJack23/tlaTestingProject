const {createStep} = require('../support/utilities');

class Offers {
    imgLogo = () => cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
    btnNane = () => cy.get('[data-test="navbar.hamburgerButton"]');
    iteRegistrace = () => cy.contains('span', 'Registrujte se');
    iteName   = () => cy.get('[data-test="global.form.input"]').type('marekD@ulovdomov.cz');
    iteNameClick = () => cy.get('[data-test="loginModal.identification.form.button"]');
    itePassword = () => cy.get('[id="password"]').type('test123');
    itePasswordClick = () => cy.contains('button','Přihlásit');
    itePasswordClick1 = () => cy.get('[class="chakra-avatar__img css-3a5bz2"]');
    iteLogOut = () => cy.contains('button','Odhlásit se');
    itePrihlaseni = () => cy.contains('button', 'Přihlásit se');
    itePrihlaseniPassword = () => cy.get('[data-test="loginModal.signIn.form.passwordInput"]').type('test123');
    offer = (text) => cy.contains('[data-test="previewOfferLeases"]', text);
    btnViewBox = () => cy.get('[data-test="global.writeBox"]').should('be.visible').click();
    btnPronajem = () => cy.contains('p','Pronájem');
    btnByt = () => cy.contains('p','Byt');
    btnCity = () => cy.get('[data-test="searchAdressInput"]').click().type('Praha{enter}');
    btnZobrInzert = () => cy.contains('a','Zobrazit inzeráty');
    btnProdej = () => cy.contains('p','Prodej');
    btnSpol = () => cy.contains('p','Spolubydlení');
    btnDum = () => cy.contains('p','Dům');
    btnDetailFilter = () => cy.get('[data-test="editSearchButton"]').should('be.visible').click();
    btnUpravaHledani = () => cy.contains('p','Upravit hledání');
    buttonUpravaHledani = (text) =>this.upravaHledani().contains('p','text');
    btnApart1k = () => cy.contains('p','1+kk');
    btnVybava = () => cy.contains('p','Nezařízené');
    btnNavic = () => cy.contains('p','Sklep');

    //Metody
    openRegistrace = () => {
        this.imgLogo();
        this.btnNane().click();
        this.iteRegistrace().click();
        this.iteName().click();
        this.iteNameClick().click();
        this.itePassword();
        this.itePasswordClick().click();
    }
    openLogOut = () => {
        this.itePasswordClick1().click();
        this.iteLogOut().click();
    }
    openPrihlaseni = () => {
        this.imgLogo();
        this.btnNane().click();
        this.itePrihlaseni().click();
        this.iteName().click();
        this.iteNameClick().click();
        this.itePrihlaseniPassword().click();
        this.itePasswordClick().click();
    }

    vyhledatByt = () => {
        this.btnViewBox()
            .should('be.visible').click();
        this.btnPronajem()
            .click();
        this.btnByt()
            .click();
        this.btnCity()
            .should('be.visible').click();
        this.btnZobrInzert()
            .click();

}
    vyhledatDum = () => {
        this.btnViewBox()
            .should('be.visible').click();
        this.btnProdej()
            .click();
        this.btnDum()
            .click();
        this.btnCity()
            .should('be.visible').click();
        this.btnZobrInzert()
            .click();
    }
    filtervyhledatByt = () => {
        this.btnUpravaHledani()
            .should('be.visible').click();
        this.btnApart1k()
            .click();
        this.btnVybava()
            .click();
        this.btnNavic()
            .should('be.visible').click();

    }
    filtervyhledatDum = () => {
        createStep()
        this.btnUpravaHledani()
            .should('be.visible').click();
    }

    openVyhledavaniPronajemByt = () =>{
        this.btnViewBox();
        this.btnPronajem().click();
        this.btnByt().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }
    openVyhledavaniProdejByt = () =>{
        this.btnViewBox();
        this.btnProdej().click();
        this.btnByt().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }
    openVyhledavaniSpolByt = () =>{
        this.btnViewBox();
        this.btnSpol().click();
        this.btnByt().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }
    openVyhledavaniPronajemDum = () =>{
        this.btnViewBox();
        this.btnPronajem().click();
        this.btnDum().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }
    openVyhledavaniProdejDum = () =>{
        this.btnViewBox();
        this.btnProdej().click();
        this.btnDum().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }
    openVyhledavaniSpolDum = () =>{
        this.btnViewBox();
        this.btnSpol().click();
        this.btnDum().click();
        this.btnCity();
        this.btnZobrInzert().click();
    }

}
module.exports = new Offers();