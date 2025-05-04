const {cities} = require("../support/ukolData");

class Offers {
    //Selektory
    inputOfferType = () => cy.get('[data-test="global.writeBox"]');
    inputSearchAddress = () => cy.get('[data-test="searchAdressInput"]');
    dropdownOption = (option) => cy.contains('.chakra-stack', option);
    buttonPropertyType = (type) => cy.contains('label', type);
    buttonSearch = () => cy.contains('a', ' Zobrazit inzeráty');
    offerPreview = () => cy.get('[data-test="previewOfferLeases"]');
    buttonEditSearch = () => cy.get('[data-test="editSearchButton"]');
    optionOptionDispotion = (dispotion) => cy.contains('p', dispotion);
    buttonZobrazitPronajmuByt = (display) => cy.contains('a',display);
    buttonZobrazitPronajmuDum = (pronajemDum) => cy.contains('a',pronajemDum);
    buttonZobrazitProdejByt = (prodej) => cy.contains('a',prodej);
    buttonZobrazitProdejDum = (prodejDum) => cy.contains('a',prodejDum);
    buttonZobrazitSpolubydlení = (spolubydleni) => cy.contains('a',spolubydleni);

    //Metody
    createSearch(offerType, propertyType, city) {
        this.inputOfferType().click();
        this.dropdownOption(offerType).click();
        if(propertyType !== '') {
            this.buttonPropertyType(propertyType).click();
        }
        this.inputSearchAddress().type(`${city}{enter}`);
        this.buttonSearch().click();
    }

    checkSearchResult(url, numberOfResults) {
        cy.url().should('include', url);
        this.offerPreview().should('be.visible')
            .and('have.length.gt', numberOfResults);
    }
    createEditSearch(offerDis,offerGear,offerExtra,offerDisplay,) {
        this.buttonEditSearch().click();
        this.optionOptionDispotion(offerDis).click();
        this.optionOptionDispotion(offerGear).click();
        this.optionOptionDispotion(offerExtra).click();
        this.buttonZobrazitPronajmuByt(offerDisplay).should('be.visible').click();
    }
    createEditSearch1(offerDis,offerGear,offerExtra,offerProdej,) {
        this.buttonEditSearch().click();
        this.optionOptionDispotion(offerDis).click();
        this.optionOptionDispotion(offerGear).click();
        this.optionOptionDispotion(offerExtra).click();
        this.buttonZobrazitProdejByt(offerProdej).should('be.visible').click();
    }
    createEditSearchHome(offerTypHome,offerRooms,offerGear,offerExtra,offerPonajemDum,) {
        this.buttonEditSearch().click();
        this.optionOptionDispotion(offerTypHome).click();
        this.optionOptionDispotion(offerRooms).click();
        this.optionOptionDispotion(offerGear).click();
        this.optionOptionDispotion(offerExtra).click();
        this.buttonZobrazitPronajmuDum(offerPonajemDum).should('be.visible').click();
    }
    createEditSearchHome1(offerTypHome,offerRooms,offerGear,offerExtra,offerProdejDum,) {
        this.buttonEditSearch().click();
        this.optionOptionDispotion(offerTypHome).click();
        this.optionOptionDispotion(offerRooms).click();
        this.optionOptionDispotion(offerGear).click();
        this.optionOptionDispotion(offerExtra).click();
        this.buttonZobrazitProdejDum(offerProdejDum).should('be.visible').click();
    }
    createEditSearchcohousing(offerTypHome,offerRooms,offerGear,offerExtra,offerLokalita,offerSopubydleni,) {
        this.buttonEditSearch().click();
        this.optionOptionDispotion(offerTypHome).click();
        this.optionOptionDispotion(offerRooms).click();
        this.optionOptionDispotion(offerGear).click();
        this.optionOptionDispotion(offerExtra).click();
        this.optionOptionDispotion(offerLokalita).click()
        this.buttonZobrazitSpolubydlení(offerSopubydleni).should('be.visible').click();
    }
}

module.exports = new Offers();