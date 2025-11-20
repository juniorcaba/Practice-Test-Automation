class LoginPage {

    siteHeader = () => cy.get('section#login h2')

    loginSuccesText = () => cy.get('p')

    usernameField = () => cy.get('#username');

    passwordField = () => cy.get('#password');

    submitButton = () => cy.get('#submit');

    usernameErrorMessage = () => cy.get('#error'); 

    passwordErrorMessage = () => cy.get('#error'); 

    logoutButton = () => cy.contains('Log out');

}

export default LoginPage;