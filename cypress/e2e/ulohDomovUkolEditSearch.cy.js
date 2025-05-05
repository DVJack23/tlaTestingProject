import Offers from "../models/ulohOffers";
import {cities} from "../support/ukolData";

describe('Uprava vyhledávaní', () => {
    beforeEach(() => {
        cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
        // cy.visit('https://www.ulovdomov.cz/');

    });

    it('User is able to find a rent for a flat and edit search', () => {
        Offers.createSearch('Pronájem', 'Byt', cities[0]);
        Offers.checkSearchResult('pronajem/bytu/praha?lokace=Praha', 0);
        Offers.createEditSearch('1+kk','Částečně','Pračka','Zobrazit 5 pronájmů');

    });

    it('User is able to find a rent for a house and edit search', () => {
        Offers.createSearch('Pronájem', 'Dům', cities[1]);
        Offers.checkSearchResult('pronajem/domu/brno?lokace=Brno', 0);
        Offers.createEditSearchHome('Rodinný','5 a více','Částečně','Garáž','Zobrazit 46 pronájmů');

    });

    it('User is able to find a buy a flat and edit search', () => {
        Offers.createSearch('Prodej', 'Byt', cities[0]);
        Offers.checkSearchResult('prodej/bytu/praha?lokace=Praha', 0);
        Offers.createEditSearch1('2+1','Nezařízené','Výtah','Zobrazit 2 prodeje');

    });

    it('User is able to find a buy a house and edit search', () => {
        Offers.createSearch('Prodej', 'Dům', cities[0]);
        Offers.checkSearchResult('prodej/domu/praha?lokace=Praha', 0);
        Offers.createEditSearchHome1('Vila','5 a více','Zařízené','Garáž','Zobrazit 2 prodeje');

    });

    it('User is able to find a cohousing and edit search', () => {
        Offers.createSearch('Spolubydlení', '', cities[0]);
        Offers.checkSearchResult('spolubydleni/praha?lokace=Praha', 0);
        Offers.createEditSearchcohousing('Velmi dobrý','Cihlová','A','Centrum obce','Obytná','Zobrazit 2 spolubydlení');

    });

});