# **Mytheresa-Cypress**

Automation Framework for Mytheresa web application using the automation tool Cypress - READ BEFORE MAKING EDITS TO THE REPOSITORY!

## System Requirements

Cypress is a desktop application that is installed on your machine. The desktop application supoorts these operating systems:

- macOs 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above
- Node.js - If you're using npm to install Cypress, cypress supprt: Node.js 10 or 12 and above

## Prerequisites

- Node.js: https://nodejs.org/en/download/
- Visual Studio Code: https://code.visuals.com/download

## How to install

- Clone the Repo
 ```
 git clone https://github.com/irfanahmad7006/mytheresa-qa-assignment.git
 ```
- Install the npm dependenceies
 ```
 npm install
 ```
## Test cases information:
1. `TestCase1.cy.js` This test covers below given scenarios:
    - As a tester, I want to make sure no JavaScript errors when you visit https://www.mytheresa.com/de/en/men
    - As a tester, I want to check if a page is returning the expected status code

2. `TestCase2.cy.js` This test covers below given scenario:
    - As a customer, I want to verify I can log in to https://www.mytheresa.com/de/en/men

3. `TestCase3.cy.js` This test covers below given scenarios:
    - As a product owner, I want to see how many open pull requests are there for our product. You can use https://github.com/appwrite/appwrite/pulls as an example product
    - Output is a list of PR in CSV format with PR name, created date and author

## Launching and Running Tests in Cypress

1. Open the Visual Code and go to the terminal and run `npx cypress open`. This command will initialize the cypress desktop application and you can choose the test case you want to run and on available browsers.

2. If you want to all test cases from cli then go to the project root directory and run `npx cypress run`. This command will execute all the test cases in the `e2e` directory. (Execution will happen on headless browser)

3. If you want to run specific file with headed browser then you use this command `npx cypress run  --headed --browser <Browser_Name> --spec <Spec_File_Path>`

```
Example: npx cypress run  --headed --browser chrome --spec cypress\e2e\TestCase2.cy.js
```

## Changing Environments & Browsers

1. You can change the environment manually of your tests are run against by editing the test spec files. 
```
 Example 1: cy.visit(Cypress.env('prodUrl')) 
 Example 2: cy.visit(Cypress.env('stageUrl'))
```

2. You can change the environment from CLI, using this command `npx cypress run --env prodUrl=<Enviornment URL> --headed --browser <Browser_Name> --spec <Spec_File_Path>` 
```
 npx cypress run --env prodUrl=https://www.mytheresa.com/de/en/men --headed --browser chrome --spec cypress\e2e\TestCase2.cy.js
```