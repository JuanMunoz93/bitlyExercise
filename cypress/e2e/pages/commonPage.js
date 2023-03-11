require('@cypress/xpath');

export class CommonPage{

    webElements = {
        generateQrBtn: () => cy.get("#button-create-qr-code"),
        downloadQrBtn: (format) => cy.get(`button[ng-click="download('${format}')"]`),
        enterContentBtn: () => cy.xpath('//h3[@class="title" and text()="Enter Content"]'),
    }

    generateQR(){
        this.webElements.generateQrBtn().click();
    }

    downloadQR(qrFormat){
        let downloadBtn=this.webElements.downloadQrBtn(qrFormat);

        cy.window().document().then(function (doc) {
        doc.addEventListener('click', () => {

          setTimeout(function () { doc.location.reload() }, Cypress.env('refreshPageTime'))
        })
        downloadBtn.click()
      })
    }
}