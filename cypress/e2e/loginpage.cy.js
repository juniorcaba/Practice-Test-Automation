import testLogin from "../Pages/loginPage";

describe('Login Page', () => {

const login = new testLogin();

beforeEach(() => {
login.visit();
});

it('Test case 1: Positive LogIn test', () => {
login.header.should('have.text', 'Test login');
login.inputUser.type('student');
login.inputPass.type('Password123');
//login.submitButton.click();
cy.contains('Submit').click();
cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
login.congratMessage.should('have.text', 'Congratulations student. You successfully logged in!');
//login.logOutButton.click();
cy.contains('Log out').click();
});



});