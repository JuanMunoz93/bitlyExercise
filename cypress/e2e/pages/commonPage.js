require('@cypress/xpath');

export class CommonPage{

    webElements = {
        generateQrBtn: () => cy.get("#button-create-qr-code"),
        downloadQrBtn: () => cy.get("#button-download-qr-code-png"),
        enterContentBtn: () => cy.xpath('//h3[@class="title" and text()="Enter Content"]'),
    }

    generateQR(){
        this.webElements.generateQrBtn().click();
    }

    downloadQR(){
        this.webElements.downloadQrBtn().click();
    }
}