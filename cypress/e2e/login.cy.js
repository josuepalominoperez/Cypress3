///<reference types="cypress"/>

import {LoginPage} from "./pages/login_page"

const loginPage = new LoginPage()

it('passes', () => {
    loginPage.navigateURL('https://demoqa.com/login')
    loginPage.enterUsername('abc')
    loginPage.enterPassword('qwerty{Enter}')
    
  })