require('@cypress/xpath');
const validQRFormats=["png","svg","pdf","eps"];
const settingAccordions=["content","colors","logo","shape"];
const contentTabs=["url","text","email","phone","sms","vcard","mecard","maps","facebook","twitter","youtube","wifi","event","bitcoin"];

export class ContentPage{
    webElements = {
        generateQrBtn: () => cy.get("#button-create-qr-code"),
        downloadQrBtn: (format) => cy.get(`button[ng-click="download('${format}')"]`),
        contentTab: (tab) => cy.get(`div.type-bar-inner a.tab[ng-click="setTab('${tab}')"]`),
        settingAccordionBtn: (setting) => cy.xpath(`//div[@ng-click="setEditView('${setting}')"]/parent::div[contains(@class, "pane")]`),
        activeContentTab: () => cy.get("div.type-bar-inner a.tab.active"),
        cookiesDialog: () => cy.get("#onetrust-consent-sdk div[role='alertdialog']"),
    }

    generateQR(){
        this.webElements.generateQrBtn().click();
    }

    /**
     * Click the download button for the expected format. As downloading a file triggers an additional processes that
     * generates a timeout on Cypress, a listener to refresh the page is created before download the QR file.
     * @param {string} qrFormat The format for download qr format, the valid values are: "png", "svg", "pdf", and "eps"
     */
    downloadQR(qrFormat){
        expect(qrFormat).to.be.oneOf(validQRFormats);
  
        let downloadBtn=this.webElements.downloadQrBtn(qrFormat);

        cy.window().document().then(function (doc) {
          doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, Cypress.env('refreshPageTime'))
          })
          
          downloadBtn.click()
      })
    }

    /**
     * Get the download buttons
     * @returns {Cypress.Chainable<JQuery<HTMLElement>>[]}
     */
    getDownloadBtns(){
      return validQRFormats.map(downloadFormat =>
        this.webElements.downloadQrBtn(downloadFormat)
      )
    }

    /**
     * Get the setting accordion panes
     * @param {string[]} expectedSettingAccordions The valid values in the array are: "content","colors","logo","shape". If empty, return all setting panes.
     * @returns {[Cypress.Chainable<JQuery<HTMLElement>>]}
     */
    getSettingAccordions(expectedSettingAccordions = settingAccordions){
      return expectedSettingAccordions.map(settingAccordion =>
        this.webElements.settingAccordionBtn(settingAccordion)
      )
    }

    /**
     * Get the active content tab
         * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getActiveContentTab(){
      return this.webElements.activeContentTab()
    }

    /**
     * Get the cookies dialog
         * @returns {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    getCookiesDialog(){
      return this.webElements.cookiesDialog()
    }

}