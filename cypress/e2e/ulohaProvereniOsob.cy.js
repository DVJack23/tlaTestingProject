import Offers from "../models/ulohOffers";
import {homepageButton,homepage} from "../support/ukolData";


describe('Prověření rizikovosti osob', () => {
    beforeEach(() => {
        cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
        // cy.visit('https://www.ulovdomov.cz/');

    });

    homepageButton.forEach((button) => {
        it(`Button: ${button.btnText}`, () => {
            Offers.btnHamburgerMenu().click();
            Offers.btnRegistr().click();
            Offers.modelLoginRegistration().should('be.visible');
            Offers.inputEmail().type('test@test.cz');
            Offers.btnContinue().click();
            Offers.modelLoginRegistration().should('be.visible');
            Offers.inputPassword().type('test123');
            Offers.btnOnlyContinue().click();

            cy.contains(button.btnText)
                .scrollIntoView()
                .click();
            cy.url()
                .should('contain', button.url);
            Offers.inputName().type('Marek{enter}');
            Offers.inputlastName().type('Novák{enter}');

            Offers.inputData().click();
            Offers.buttonManeData().click();
            Offers.buttonBasicCheckUp().click();


        })
    })
});

describe('Sebeprověření', () => {
    beforeEach(() => {
        cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
        // cy.visit('https://www.ulovdomov.cz/');

    });

    homepage.forEach((button) => {
        it(`Button: ${button.btnText}`, () => {
            cy.contains(button.btnText)
                .scrollIntoView()
                .click();
            cy.url()
                 .should('contain',button.url);

        })
    })

});