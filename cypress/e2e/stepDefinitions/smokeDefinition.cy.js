import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import {ContentPage} from "../pages/contentPage"

const contentPage = new ContentPage();

When("the home page loads", () => {

});

Then("the download buttons are disabled", () => {
    contentPage.getDownloadBtns()
        .forEach( btn => btn.should('have.prop', 'disabled', true))
});
Then("the cookies dialog is visible", () => {
    contentPage.getCookiesDialog().should('be.visible');
});

Then("the settings section for content is expanded", () => {
    contentPage.getSettingAccordions(["content"])
        .forEach( btn => btn.should('have.class', 'active'))
});

Then("the default QR content is url", () => {
    contentPage.getActiveContentTab().should('have.text', 'URL')
});

Then("the additional setting sections are collapsed", () => {
    contentPage.getSettingAccordions(["colors","logo","shape"])
        .forEach( btn => btn.should('not.have.class', 'active'))
});

Then("I can expand all setting accordions", () => {
    contentPage.getSettingAccordions(["colors","logo","shape"])
        .forEach( btn => {
            btn.click().should('have.class', 'active')

        })
});

Then("I can navigate through all content types", () => {
    contentPage.getContentTabs()
        .forEach( btn => {
            btn.click().should('have.class', 'active')
        })
});