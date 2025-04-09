import {data} from '../support/data.js';
import Header from '../models/header.js';
import ListingsPage from '../models/listingsPage.js';


describe('Our tests for ulovDomov', () => {
    Object.values(data.testData).forEach((value) => {
        describe('First tests', () => {
            beforeEach(() => {
                cy.visit('https://ud-fe-1242.k8stage.ulovdomov.cz/pronajem/nemovitosti/praha?lokace=Praha');
            });
            it('TEST', () => {

                cy.contains('h1', value.text.homepageH1);
                Header.btnInsertOffer().should('be.visible').click();
                cy.step('Create first test');
                ListingsPage.searchScroller().should('be.visible');
                ListingsPage.mapOfLeases().should('be.visible');
                ListingsPage.buttonFilter(value.text.listingsButtonFilter).should('be.visible');
                ListingsPage.buttonWatchdog(value.text.listingsButtonWatchdog).should('be.visible');
                ListingsPage.scrollerHeadingSection().should('be.visible').contains('Pronájem nemovitosti Praha');
                ListingsPage.countOfOffers().should('be.visible').contains('1328');
                ListingsPage.selectFilterBy(value.text.listingsFilterOptionTwo).should('be.visible').select(value.text.listingsFilterOptionThree);
                cy.get('')

            });
        });
    });
});