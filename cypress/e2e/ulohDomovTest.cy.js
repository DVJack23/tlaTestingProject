import Offers from "../models/brake_you";
import {data} from '../support/data.js';
import {offers} from '../support/data.js';


describe('Offer', () => {
    Object.values(offers.marek).forEach((value) => {
        describe(`Offer test ${value.language}`, () => {
            it(`Offer on url: ${value.url}`, () => {
                cy.visit(value.url);
                cy.get('[data-test="global.writeBox"]').should('be.visible').click();
                cy.contains('p', value.text.btnBox).click();
                cy.contains('p', value.text.btnApart).click();

                cy.get('[data-test="searchAdressInput"]').click().type('Praha{enter}');
                cy.contains('a','Zobrazit inzeráty').should('be.visible').click();


            })
        })
    })


})

