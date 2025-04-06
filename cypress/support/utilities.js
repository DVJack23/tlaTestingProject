export function checkUrl(url) {
    cy.url().should('include', url);
}

export function catchReq(method, url) {
    return cy.intercept(method, url);
}

export function checkReq(alias, statusCodes) {
    if (!Array.isArray(statusCodes)) {
        statusCodes = [statusCodes];
    }

    return cy.wait(`@${alias}`).then(({ response }) => {
        cy.log(`Alias: @${alias}, Status: ${response.statusCode}`);
        cy.log('Response Body:', response.body.data);
        expect(statusCodes).to.include(response.statusCode);
    });
}

export function createStep(step) {
    cy.step(step);
}