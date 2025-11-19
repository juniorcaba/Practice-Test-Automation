import LoginPage from '../Pages/loginPage';

describe('Login Page', () => {

const login = new LoginPage();

beforeEach(() => {
cy.visit('https://practicetestautomation.com/practice-test-login/');
});

it('Test case 1: Positive LogIn test', () => {
login.header.should('have.text', 'Test login');
login.inputUser.type('student');
login.inputPass.type('Password123');
login.submitButton.click();
cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
login.congratMessage.should('have.text', 'Congratulations student. You successfully logged in!');
});

it('Test case 2: Negative username test', () => {
login.inputUser.type('incorrectUser ');
login.inputPass.type('Password123');
login.submitButton.click();
login.errorUserMessage.should('be.visible');
login.errorUserMessage.should('have.text', 'Your username is invalid!');
});

it ('Test case 3: Negative password test', () => {
login.header.should('have.text', 'Test login');
login.inputUser.type('student');
login.inputPass.type('incorrectPassword');
login.submitButton.click();
login.errorPassMessage.should('be.visible');
login.errorPassMessage.should('have.text', 'Your password is invalid!');
});

});