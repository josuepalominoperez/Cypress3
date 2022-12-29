describe('file upload test', ()=>{

it('file upload demo' , ()=>{
    cy.visit('https://demo.guru99.com/test/upload/')
    cy.get('[id="uploadfile_0"]').attachFile('logoSpotify')
    cy.get('#submitbutton').click()
})

})