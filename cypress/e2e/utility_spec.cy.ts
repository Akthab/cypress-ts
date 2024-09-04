it('delete a board', () => {
	cy.addBoard('new board');

	cy.editBoard({ id: 1, name: 'my board', starred: false });
});
