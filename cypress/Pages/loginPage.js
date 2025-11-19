class testLogin {

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

    get submitButton() {
        return cy.get('#submit');
    }

    get logOutButton() {
        return cy.get('a[href="https://practicetestautomation.com/practice-test-login/"]');
    }

    visit(){
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    }

}

export default testLogin;