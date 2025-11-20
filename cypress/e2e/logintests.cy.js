import LoginPage from '../Pages/loginPage';
import data from '../support/testData/loginPageData.json';

describe('Login Page', () => {

const login = new LoginPage();

beforeEach(() => {
cy.visit('/');
});

it('Test case 1: Positive LogIn test', () => {
login.siteHeader().should('have.text', data.loginHeaderText);
login.usernameField().type(data.validUser);
login.passwordField().type(data.validPassword);
login.submitButton.click();
cy.url().should('include', data.loginUrl);
});

it('Test case 2: Negative username test', () => {
login.usernameField().type(data.invalidUser);
login.passwordField().type(data.validPassword);
login.submitButton().click();
login.usernameErrorMessage().should('be.visible');
login.usernameErrorMessage().should('have.text', data.InvalidUserMesasage);
});

it.only('Test case 3: Negative password test', () => {
login.usernameField().type(data.validUser);
login.passwordField().type(data.invalidPassword);
login.submitButton().click();
login.passwordErrorMessage().should('be.visible');
login.passwordErrorMessage().should('have.text', data.InvalidPasswordMessage);
});



});