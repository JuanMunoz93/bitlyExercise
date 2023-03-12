Feature: QR codes content
    Background: 
    Given I am in the qrcode monkey homepage
    
    @cleanDownloadFolder
    Scenario: Generate custom text QR 
        When I configure a text QR with a random text
        And I generate the QR code 
        And I download the "png" QR
        Then the "png" QR contains the expected text