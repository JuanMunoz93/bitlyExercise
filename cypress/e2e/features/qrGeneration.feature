Feature: Generate QR codes
    Background: 
    Given I am in the qrcode monkey homepage

    @cleanDownloadFolder 
    Scenario Outline: Generate QR on different formats
        When I generate the QR code 
        And I download the "<qrFormat>" QR
        Then the QR code is downloaded in the "<qrFormat>" format
        Examples:
            | qrFormat |
            | png      |
            | svg      |
            | pdf      |
            | eps      |