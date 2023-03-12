Feature: basic interactions and initial state for smoke tests
    Background: 
    Given I am in the qrcode monkey homepage
    When the home page loads

    Scenario: Verify initial state of the application
        Then the cookies dialog is visible
        And the download buttons are disabled
        And the settings section for content is expanded
        And the default QR content is url
        And the additional setting sections are collapsed

    Scenario: Verify the main navigations on the app
        Then I can expand all setting accordions
        And I can navigate through all content types

