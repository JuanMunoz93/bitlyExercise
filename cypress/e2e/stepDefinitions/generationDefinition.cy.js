import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {ContentPage} from "../pages/contentPage";
import {generateRandomString} from "../../support/utils";

const contentPage = new ContentPage();

Given("I generate the QR code", () => {
    contentPage.generateQR();
});

When("I download the {string} QR", (qrFormat) => {
    contentPage.downloadQR(qrFormat);
});

Then("the QR code is downloaded in the {string} format", (qrFormat) => {
    const expectedDownloadedFile=Cypress.config('downloadsFolder')+`\\qr-code.${qrFormat}`;
    cy.readFile(expectedDownloadedFile, {timeout:Cypress.env('readFileTimeout')}).then((content)=>{
        console.log(`downloaded QR found, path= ${expectedDownloadedFile}`);
    })
});

When("I configure a text QR with a random text", () => {
    const randomString=generateRandomString(10);
    cy.wrap(randomString).as("qrString");
    contentPage.configureQRText(randomString);
});



Then("the {string} QR contains the expected text", (qrFormat) => {
    console.log("0")
    const qrFullPath=Cypress.config('downloadsFolder')+`\\qr-code.${qrFormat}`;

    cy.readFile(qrFullPath, {timeout:Cypress.env('readFileTimeout')}).then(()=>{
        cy.task('readQR', qrFullPath).then((qrValue)=>{
            cy.get("@qrString").should('equal', qrValue);
        })
    })



});

