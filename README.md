# bitlyExercise
## Overview
This node project contains my solution to the challenge proposed by Bitly, summarizing it is cover to the main smoke functionality of 'https://www.qrcode-monkey.com/' application.

Used stack:
+ IDE used: vsCode
+ Language: JavaScript & Node (v19.0.0)
+ Package manager: npm (v8.19.2)
+ Testing FW: Cypress (12.7.0)

## Project structure
The automation was implemented using BDD tests with 3 main logic layers. On this is the project structure are skipped the folders and files of the default cypress structure:

```
root
├── cypress
│   ├── e2e 
│   │   ├── features            # Test files
│   │   ├── pages               # Page objects
│   │   └── stepDefinitions     # Gherkin definitions
│   ├── support
│   │   └── utils.js            # Gherkin definitions
|   └── ...
├── cucumber-report.html        # Report Automatically generated after test execution 
└── ...
```

### Logic layers
1. Features: Contains the written tests on gherkin language in '.feature' files.
2. Definitions: Connects the gherkin tests with its js implementation.
3. Pages: Contains the page objects that allows interaction with the web elements.

Depending on the automation complexity, sometimes I add a layer between the definitions and the pages, something similar to a 'business actions layer'. Having business-oriented actions improve code reuse, makes easier the maintenance tasks, and makes the project more readable, additionally allows a more organic integration with actions like db queries or api consumptions. For this challenge, adding this layer will not add value but make the project bigger and more complex, so I didn't included it.

## Solution
After having an exploratory testing session and considering that the smoke tests determines if the current version of the application is stable, I considered important to include at least these verifications on my solution:

* Initial state of the application: The default content type for the QRs, all content settings accordions are collapsed, and it is not possible to download a QR because it was not generated yet. 
* Navigation: It is possible to navigate through the different content tabs and expand/collapse the content settings accordions.
* Critic flow: It is possible to generate and download QRs with the the different formats.
* Additional verification: Not necessary part of the smoke suite (so it only was configured to be executed on desk resolution), but the goal of this verification is check that the QR code was right encoded and the information used on its generation is the same that the received after reading the qr.

Finally, as the mobile users normally are a high percentage of the total users of web applications, these tests were implemented to be executed on desk (1920x1080) and mobile (412x915) resolutions, so problems on both resolutions can be detected.

## Execution
Before execute the command, install the dependencies with the ```npm install``` command.
+ To execute the smoke test on desk resolution, execute ```npm run smokeTest```
+ To execute the smoke test on mobile resolution, execute ```npm run mobileSmokeTest```
+ The cypress UI can be opened using the ```npx cypress open``` or ```npm run cypressUI``` commands, on this interface you can decide which test execute

### Note
+ For the executions by commands, a basic html report is generated on the root as 'cucumber-report.html' and the execution videos are saved on the videos folder.

## Improvements and next steps
### Improvements
+ Improve the download file process, currently it has a timer for refresh the page an prevent a timeouts, but this generates an unnecessary waiting time that increase the execution time.
+ Add tests to cover additional features on the smoke, like customization of the QR code (colors, images, and design) and functionalities that are only available for registered users.
+ Improve the configuration for the test execution on multiple resolutions and browsers.
+ Use tags to group the tests by suites.

### Next steps
+ Dockerize the test execution.
+ Configure the tests to be executed on a CI/CD tool.
+ Create functional test suite.
+ Include non-functional verifications, like the used time for generate the QR or check if the BE is throwing errors during the tests.