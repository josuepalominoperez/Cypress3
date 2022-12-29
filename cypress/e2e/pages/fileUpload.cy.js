/*Step 1: Installl plugin cypress-file-upload
npm install --save-dev cypress-file-upload

Step2: If we are using Typescript , ensure tsconfig.json contains
"compilerOptions":{
    "types":["cypress","cypress-file-upload"]}

Step3: Add to cypress/support/commands.js
import 'cypress-file-upload';

Step 4: Check this commands.js is imported in cypress/support/index.js o su similar cypress/support/e2e.js
import './commands';


*/
describe('file upload test', ()=>{

it('file upload demo' , ()=>{
    cy.visit('https://demo.guru99.com/test/upload/')
    //The file should be in cypress/fixtures/
    cy.get('[id="uploadfile_0"]').attachFile('logoSpotify.jpg')
    cy.get('#submitbutton').click()
})

})