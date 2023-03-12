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

@cleanDownloadFolder
    Scenario: Generate custom text QR 
        When I configure a text QR with a random text
        And I generate the QR code 
        And I download the "png" QR
        Then the "png" QR contains the expected text