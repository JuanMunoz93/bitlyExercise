import { Given, Before} from "@badeball/cypress-cucumber-preprocessor"

Given("I am in the qrcode monkey homepage", () => {
    cy.visit('/');
});

Before({ tags: "@cleanDownloadFolder" }, () => {
    const downloadsFolder = Cypress.config('downloadsFolder')
    cy.task('deleteFolder', downloadsFolder)
  });