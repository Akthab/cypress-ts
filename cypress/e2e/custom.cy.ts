it('create a new board', () => {
	cy.visit('/');

	// cy.getByPlaceholder('Name of your first board');

	cy.addBoard('new board').then((body) => {
		expect(body.id).to.exist;
		expect(body.starred).to.be.false;
		expect(body.name).to.eq('new board');
	});
});
