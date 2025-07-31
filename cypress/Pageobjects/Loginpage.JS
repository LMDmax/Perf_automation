class Login
{
    setUserName(email)
    {
        cy.get('input[name="email"]').type(email);
    }

    setPassword(password)
    {
        cy.get('input[placeholder="Password"]').type(password);
    }

    Clickbutton()
    {
        cy.contains('button', 'Sign In').click();
    }
}

export default Login;