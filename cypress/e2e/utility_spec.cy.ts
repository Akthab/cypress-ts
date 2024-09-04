it('delete a board', () => {
	// cy.addBoard('new board');

	cy.editBoard({ id: 1, name: 'crazy board', starred: false });
});
