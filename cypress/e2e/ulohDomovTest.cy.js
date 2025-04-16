import Offers from "../models/brake_you";
import {data, offersFilterHome} from '../support/data.js';
import {offersxxx} from '../support/data.js';
import {offersFilter} from '../support/data.js';
import {domains} from "../support/data.js";

// let domainsHome = {
//     langs: [
//         {
//             language: 'cz',
//             url: 'https://ud-fe.k8stage.ulovdomov.cz/',
//             text: {
//                 btnBox: 'Pronájem',
//                 btnHome: 'Dům',
//                 iteCity: 'Praha',
//             }
//         },
//         {
//             language: 'cz',
//             url: 'https://ud-fe.k8stage.ulovdomov.cz/',
//             text: {
//                 btnBox: 'Prodej',
//                 btnHome: 'Dům',
//                 iteCity: 'Praha',
//             }
//         },
//         {
//             language: 'cz',
//             url: 'https://ud-fe.k8stage.ulovdomov.cz/',
//             text: {
//                 btnBox: 'Spolubydlení',
//                 btnHome: 'Dům',
//                 iteCity: 'Praha',
//
//             }
//         }
//     ]
// }
describe('Testování vyhledávání bytu a domů', () => {
    Object.values(offersxxx.marekOffer).forEach((value) => {
        describe('Testování pro lokalitu Praha', () => {
            beforeEach(() => {
                cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
            });
            it('TEST vyhledávaní pronájem bytu', () => {
                Offers.vyhledatByt(value.text.btnBox,
                    value.text.btnApart,value.text.btnZobrazitInzerat)
            });
            it('TEST vyhledávní prodej bytu', () => {
                Offers.vyhledatByt(value.text.btnBox2,
                    value.text.btnApart,value.text.btnZobrazitInzerat)
            });
            it('TEST vyhledávaní pronájem domů', () => {
                Offers.vyhledatDum(value.text.btnBox,
                    value.text.btnHome,value.text.btnZobrazitInzerat)
            });
            it('TEST vyhledávní prodej domů', () => {
                Offers.vyhledatDum(value.text.btnBox2,
                    value.text.btnHome,value.text.btnZobrazitInzerat)
            });
        });
    });
});
describe('Testování uprava vyhledávání bytu a domů', () => {
    Object.values(offersFilter.marekFilter).forEach((value) => {
        describe('Testování pro lokalitu Praha', () => {
            beforeEach(() => {
                cy.visit('https://ud-fe.k8stage.ulovdomov.cz/pronajem/bytu/praha?lokace=Praha');
            });
            it('TEST uprava vyhledávaní pronájem bytu', () => {

                Offers.filtervyhledatByt(value.listingpage,value.btndispostion,
                    value.btnTypeAmenitie,value.btnTypeExtra)
            });
            it('TEST uprava vyhledávaní pronájem domu', () => {

                Offers.filtervyhledatDum(value.listingpage,value.btndispostion5,
                    value.btnTypeAmenitie,value.btnTypeExtra)
            });

        });
    });
});


// describe('Vyhledavaní', () => {
//     beforeEach(() => {
//         cy.visit('https://ud-fe.k8stage.ulovdomov.cz/');
//         // cy.get('[data-test="global.writeBox"]').should('be.visible').click();
//
//     });
//
//     it('Vyhledavaní Pronajem Bytu', () => {
//         Offers.openVyhledavaniPronajemByt();
//     });
//     it('Vyhledavaní Prodej Bytu', () => {
//         Offers.openVyhledavaniProdejByt();
//     });
//     it('Vyhledavaní Spolubydlení Bytu', () => {
//         Offers.openVyhledavaniSpolByt();
//     });
//
//     it('Vyhledavaní Pronajem Domu', () => {
//         Offers.openVyhledavaniPronajemDum();
//     });
//     it('Vyhledavaní Prodej Domu', () => {
//         Offers.openVyhledavaniProdejDum();
//     });
//     it('Vyhledavaní Spolubydlení Domu', () => {
//         Offers.openVyhledavaniSpolDum();
//     });
//
// });


// describe('Offers', () => {
//     Object.values(offersxxx.marekOffer).forEach((value) => {
//         describe(`Basic check for ${value.language}`, () => {
//             it(`Offers on url: ${value.url}`, () => {
//                 cy.visit(value.url);
//                 // cy.wait(1000);
//                 // cy.get('[data-test="global.writeBox"]').should('be.visible').click();
//                 // cy.contains('p', value.text.btnBox).click();
//                 // cy.contains('p', value.text.btnApart).click();
//                 // // // cy.contains('Praha',value.iteCity).click();
//                 // cy.get('[data-test="searchAdressInput"]').click().type('Praha{enter}');
//                 // cy.contains('a','Zobrazit inzeráty').should('be.visible').click();
//
//             })
//         })
//     })
// })
// describe('Offer Bytu', () => {
//     Object.values(offersFilter.marekFilter).forEach((value) => {
//         describe(`Offer test ${value.language}`, () => {
//
//             it(`Offer on url: ${value.url}`, () => {
//                 cy.visit(value.url);
//                 Offers.btnDetailFilter();
//                 cy.contains('p', value.text.btndispostion).click();
//                 cy.contains('p', value.text.btnTypeAmenitie).click();
//                 cy.contains('p', value.text.btnTypeExtra).click();
//
//             })
//         })
//     })
// })
// describe('Offer Domu', () => {
//     Object.values(offersFilterHome.marekFilterHome).forEach((value) => {
//         describe(`Offer test ${value.language}`, () => {
//
//             it(`Offer on url: ${value.url}`, () => {
//                 cy.visit(value.url);
//                 Offers.btnDetailFilter();
//
//
//                 cy.contains('p', value.text.btnTypeHome).click();
//                 cy.contains('p', value.text.btnTypeRoom).click();
//                 cy.contains('p', value.text.btnTypeAmenitie).click();
//             })
//         })
//     })
// })

