import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/RegistrationPage");

Given("A user opens a Todotest website", () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.visit("/");
  cy.contains("Todotest");

  
  loginPage.clickRegistrationBtn();
  
});
When("A user provides credentials for registration", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.email);
    loginPage.typeEmail(row.email);
    loginPage.typeCodPostal(row.codPostal);
    cy.log(row.codPostal);
    loginPage.typeTel(row.phone);
    cy.log(row.phone);
    loginPage.selectQuestionExamination(row.questionExamination);
    cy.log(row.questionExamination);
    loginPage.selectCarnetOption(row.carnet);
    cy.log(row.carnet);
    loginPage.SelectPermission(row.permission);
    cy.log(row.permission);
    loginPage.SelectPermissionOption(row.permissionOption);
    cy.log(row.permissionOption);
    loginPage.typePassword(row.password);
    cy.log(row.password);
    loginPage.typePasswordRep(row.passwordRep);
    cy.log(row.passwordRep);
    loginPage.clickTermsAndConditions();
    loginPage.selectReceiveChangesBtnRa(row.receiveChanges);
    cy.log(row.receiveChanges);
  });
});
And("A user clicks on the registration button", () => {
  loginPage.clickCreateAccount();
});
Then("The code is generated and sent to the mailing address", () => {
  loginPage.ValidateTest();  

});

