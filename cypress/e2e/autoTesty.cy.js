import {data} from '../support/data.js';

describe('Our tests for ulovDomov', () => {
    Object.values(data.testData).forEach((value) => {
        describe('First tests', () => {
            beforeEach(() => {
                cy.visit('/');
            });
            it('TEST', () => {
                cy.contains('h1', value.text.homepageH1);
            })
        });
    });
});