describe('Test contact us form', () => {
	it('Successful form submission', () => {
		cy.visit('/')
		cy.get('li').contains('Contact Us').invoke('text').as('name')
		cy.log(cy.get('@name').should('contain', 'Contact Us'))
	})

	it.only('Test tabs', () => {
		//A way to handle testing tabs without actdually opening them up since Cypress doesn't support it
		cy.visit('http://www.webdriveruniversity.com')
		cy.get('#contact-us').invoke('removeAttr', 'target').click()
	})
})
