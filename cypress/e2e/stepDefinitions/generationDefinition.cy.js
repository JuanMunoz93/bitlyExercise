import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import {CommonPage} from "../pages/commonPage"

const commonPage = new CommonPage();

Given("I generate the QR code", () => {
    commonPage.generateQR();
});

When("I download the {string} QR", (qrFormat) => {
    commonPage.downloadQR(qrFormat);
});

Then("the QR code is downloaded in the {string} format", (qrFormat) => {

    const expectedDownloadedFile=Cypress.config('downloadsFolder')+`\\qr-code.${qrFormat}`;
    cy.readFile(expectedDownloadedFile, {timeout:Cypress.env('readFileTimeout')}).then((content)=>{

        console.log(`downloaded QR found, path= ${expectedDownloadedFile}`);

    })

        
});