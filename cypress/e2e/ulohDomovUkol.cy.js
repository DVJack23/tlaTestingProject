import Offers from '../models/ulohOffers';
import { cities } from '../support/ukolData';


describe('Vyhledavani', () => {
    beforeEach(() => {
        cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
        // cy.visit('https://www.ulovdomov.cz/');

    });

    it('User is able to find a rent for a flat', () => {
        Offers.createSearch('Pronájem', 'Byt', cities[0]);
        Offers.checkSearchResult('pronajem/bytu/praha?lokace=Praha', 0);

    });

    it('User is able to find a rent for a house', () => {
        Offers.createSearch('Pronájem', 'Dům', cities[1]);
        Offers.checkSearchResult('pronajem/domu/brno?lokace=Brno', 0);
    });

    it('User is able to find a buy a flat', () => {
        Offers.createSearch('Prodej', 'Byt', cities[2]);
        Offers.checkSearchResult('prodej/bytu/plzen?lokace=Plzen', 0);
    });

    it('User is able to find a buy a house', () => {
        Offers.createSearch('Prodej', 'Dům', cities[3]);
        Offers.checkSearchResult('prodej/domu/ostrava?lokace=Ostrava', 0);
    });

    it('User is able to find a cohousing', () => {
        Offers.createSearch('Spolubydlení', '', cities[4]);
        Offers.checkSearchResult('spolubydleni/olomouc?lokace=Olomouc', 0);
    });
});