import LoginPage from '../pageobjects/login.page.js';

const login_page = new LoginPage()
describe('My Login application', () => {
    // new Promise(resolve => setTimeout(resolve, 20000));
    before(async () => {
        //Initilizing Session
        console.log("Creating Session...")
        await login_page.CreateSession();
        new Promise(resolve => setTimeout(resolve, 10000));
    });

    after (async () => {
        //Deleting Session
        if  (login_page.client)
            {
                await login_page.client.terminateApp('com.myzesty')
                console.log("Application Closed Successfully.")
                await login_page.client.deleteSession();
                console.log("Session deletted Successfully");
            } 
    });
    it('should login with valid credentials', async () => {
        await login_page.login('umart4767@gmail.com', 'Myzesty123');
        const expected_text_1 = 'Login' ;
        const expected_text_2 = 'Log in to your account' ;
        await login_page.Assert_Login_Text(expected_text_1, expected_text_2, 'umart4767@gmail.com', 'Myzesty123') ;

    })
})
