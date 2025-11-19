class LoginPage {

    get header(){
        return cy.get('h2')
    }

    get congratMessage(){
        return cy.get('p')
    }

    get inputUser() {
        return cy.get('#username');
    }

    get inputPass() {
        return cy.get('#password');
    }

    get errorUserMessage() {
        return cy.get('#error');
    }

    get errorPassMessage() {
        return cy.get('#error');
    }

    get submitButton() {
        return cy.get('#submit');
    }

    get clickOnLogout() {
        return cy.contains('Log out');

    }

}

export default LoginPage;