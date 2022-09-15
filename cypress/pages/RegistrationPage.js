///
class homeSaucePage {
  elements = {
    
    registrationBtn: () => cy.get('a'), 
    singUp: () => cy.get('.header-button--registration'),
    emailInput: () => cy.get("#email"),
    codPostalInput: () => cy.get("#cp"),
    TelInput: () => cy.get("#tel"),
    questionExaminationBtnRa: () => cy.get("label"),
    cartnetOption: () => cy.get("label"),
    permissionSelect: () => cy.get("#perm"),
    permissionOption: () => cy.get("label"),
    passwordInput: () => cy.get("#contra"),
    passwordRepInput: () => cy.get("#contrarep"),
    termsAndConditionBtnRa: () => cy.get(".lbl"),
    receiveChangesBtnRa: () => cy.get("label"),    
    createAccount: () => cy.get("#bot_reg"),
    validateBtn: () => cy.get("a"),
  };

  clickRegistrationBtn() {
    this.elements.registrationBtn().contains("Registrarse").click();
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typeEmail(email) {
    this.elements.emailInput().type(email);
  }

  typeCodPostal(codPostal) {
    this.elements.codPostalInput().type(codPostal);
  }

  typeTel(phone) {
    this.elements.TelInput().type(phone);
  }


  selectQuestionExamination(questionExamination) {

    this.elements.cartnetOption().contains(questionExamination).click();
  }

  selectCarnetOption(carnet) {
    this.elements.cartnetOption().contains(carnet).click();
  }

  SelectPermission(permission) {
    this.elements.permissionSelect().select(permission);
  }

  SelectPermissionOption(permissionOption) {
    this.elements.permissionOption().contains(permissionOption).click();
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  typePasswordRep(passwordRep) {
    this.elements.passwordRepInput().type(passwordRep);
  }

  clickTermsAndConditions() {
    this.elements.termsAndConditionBtnRa().click();
  }

  selectReceiveChangesBtnRa(receiveChanges) {
    this.elements.receiveChangesBtnRa().contains(receiveChanges).click();
  }

  clickCreateAccount() {
    this.elements.createAccount().click();
  }

  ValidateTest() {
    cy.contains("a", "Identificarte");
    cy.wait(3000);
  }
}

module.exports = new homeSaucePage();
