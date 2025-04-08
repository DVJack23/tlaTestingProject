import {data} from '../support/data.js';
import ListingsPage from '../models/listingsPage.js';


describe('Component testing for list of active leases page', () => {
    Object.values(data.testData).forEach((value) => {
        describe('Testing for location Prague', () => {
            beforeEach(() => {
                cy.visit('https://www.ulovdomov.cz/pronajem/nemovitosti/praha?lokace=Praha');
            });
            it('Basic Elements check', () => {
                ListingsPage.basicElementsCheck(value.text.listingsOrderOptionTwo,
                    value.text.listingsButtonSearchInMap, value.text.listingsButtonLoadMore)
            });
            it('Click the create Watchdog button', () => {
                ListingsPage.clickCreateWatchdog();
            });
            it('Change the order of leases', () => {
                ListingsPage.changeLeasesOrder(value.text.listingsOrderOptionOne, value.text.listingsOrderOptionThree, value.text.listingsOrderOptionThreeUrl);
            });
            it('Open the change filters window', () => {
                ListingsPage.clickChangeFilterOption();
            });
            it('Load more leases', () => {
                ListingsPage.loadMoreLeases(value.text.listingsButtonLoadMore);
            });
            it('Contact first lease', () => {
                ListingsPage.contactFirstLease();
            });
            it('Open first lease detail page', () => {
                ListingsPage.showFirstLeaseDetail(value.text.listingsButtonShowLeasesDetail);
            });
            // it('Save first lease to favourites', () => {
            //     ListingsPage.saveFirstLeaseAsFavourite();
            //     // TODO - Log in needed to run the test
            // });
            it.only('Testing control buttons for map', () => {
                ListingsPage.mapZoomIn();
                ListingsPage.mapZoomOut();
                ListingsPage.mapReset();
            })
        });
    });
});