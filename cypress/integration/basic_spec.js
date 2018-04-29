describe('Basic example', function() {
	// Might want to use a fixture or something for the table data later? Example below

	// before(function () {
	// cy.server()
	// cy.route('POST', '/users', { id: 123 }).as('postUser')
	// cy.fixture('data.json').as('data')
	// cy.get('@users').then((users) => {
	//   // access the users argument
	//   const user = users[0]

	//   // make sure the header contains the first
	//   // users name
	//   cy.get('header').should('contain', user.name)
	// })

	// cy.wait('@postUser').its('requestBody').should('have.property', 'name', 'Brian')
	// })

	it('Opens the Basic example page', function() {
		cy.visit('/example-usage#basicUsage');
	});

	it('Contains the headings Id, Name and Lucky number', function() {
		cy
			.get('thead > tr')
			.should('contain', 'Id')
			.should('contain', 'Name')
			.should('contain', 'Lucky number');
	});

	it('Has 10 table rows', function() {
		cy
			.get('tbody')
			.children()
			.should('have.length', '10');
	});

	it('Has the default first row with Id 39, Name Andrea and Lucky number 39', function() {
		cy.get('tbody > :nth-child(1) > .id-column').should('contain', '39');
		cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Andrea');
		cy
			.get('tbody > :nth-child(1) > .lucky_number-column')
			.should('contain', '39');
	});

	describe('Tests pagination', function() {
		it('Checks Page 1', function() {
			// First active page is 1
			cy.get('.pagination > .active > .page-link').should('contain', '1');
			cy.get('.form-text > span').should('contain', '1 to 10 of 100');
			cy
				.get('tbody > :nth-child(1) > .name-column')
				.should('contain', 'Andrea');

			// Previous is disabled
			cy.get('.pagination > :nth-child(1)').should('have.class', 'disabled');

			// Next is not disabled
			cy
				.get('.pagination > :nth-child(9)')
				.should('not.have.class', 'disabled');
		});

		it('Checks Page 5', function() {
			// Goes to page 5
			cy.get('.pagination > :nth-child(6) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '5');
			cy.get('.form-text > span').should('contain', '41 to 50 of 100');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Jesse');
		});

		it('Checks Next >> which is Page 6', function() {
			// Goes to next which is page 6
			cy.get('.pagination > :nth-child(9)').click();
			cy.get('.active > .page-link').should('contain', '6');
			cy.get('.form-text > span').should('contain', '51 to 60 of 100');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Laura');
		});

		it('Checks Page 10 (last)', function() {
			// Goes to last page 10
			cy.get('.pagination > :nth-child(8) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '10');
			cy.get('.form-text > span').should('contain', '91 to 100 of 100');
			cy
				.get('tbody > :nth-child(1) > .name-column')
				.should('contain', 'Thomas');

			// Next is disabled (Next is now the 8th element since the last page has fewer page-links in the pagination bar)
			cy.get('.pagination > :nth-child(8)').should('have.class', 'disabled');

			// Previous is not disabled
			cy
				.get('.pagination > :nth-child(1)')
				.should('not.have.class', 'disabled');
		});
	});

	describe('Tests sorting', function() {
		it('Sorts by Id: Ascending and Descending; makes sure it is retained when changes pages', function() {
			// Reset test state: Goes to page 1
			cy.get('.pagination > :nth-child(2) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '1');

			// Goes to page 10. Should currently be on page 10
			cy.get('.pagination > :nth-child(8) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '10');

			// Sorts Desc by Id
			cy.get('thead > tr > .id-column').click();

			// First row on page should then be: 10 - Todd - Lucky number=65
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '10');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Todd');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '65');

			// Last row on page should then be Id 1 - Anna - Lucky number=63
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '1');
			cy.get('tbody > :nth-child(10) > .name-column').should('contain', 'Anna');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '63');

			// Goes to page 1
			cy.get('.pagination > :nth-child(2) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '1');

			// First row on page should then be: 100 - Virgina - Lucky number=14
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '100');
			cy
				.get('tbody > :nth-child(1) > .name-column')
				.should('contain', 'Virginia');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '14');

			// Last row on page should then be: 91 - Jason - Lucky number=60
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '91');
			cy
				.get('tbody > :nth-child(10) > .name-column')
				.should('contain', 'Jason');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '60');

			// Sorts Asc by Id
			cy.get('thead > tr > .id-column').click();

			// First Id row on page should then be: 1 - Anna - Lucky number=63
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '1');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Anna');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '63');

			// Last row on page should then be: 10 - Todd - Lucky number=65
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '10');
			cy.get('tbody > :nth-child(10) > .name-column').should('contain', 'Todd');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '65');

			// Goes to page 10
			cy.get('.pagination > :nth-child(8) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '10');

			// First row on page should then be: 91 - Jason - Lucky number=60
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '91');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Jason');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '60');

			// Last row on page should then be: 100 - Virgina - Lucky number=14
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '100');
			cy
				.get('tbody > :nth-child(10) > .name-column')
				.should('contain', 'Virginia');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '14');
		});

		it('Sorts by Name: Ascending and Descending', function() {
			// Reset test state: Goes to page 1
			cy.get('.pagination > :nth-child(2) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '1');

			// Sorts Name by Asc
			cy.get('thead > tr > .name-column').click();

			// First row on page should be: 39 - Andrea - Lucky number=39
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '39');
			cy
				.get('tbody > :nth-child(1) > .name-column')
				.should('contain', 'Andrea');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '39');

			// Last row on page should be: 48 - Brenda - Lucky number=18
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '48');
			cy
				.get('tbody > :nth-child(10) > .name-column')
				.should('contain', 'Brenda');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '18');

			// Sorts Name by Asc
			cy.get('thead > tr > .name-column').click();

			// First row on page should be: 28 - William - Lucky number=57
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '28');
			cy
				.get('tbody > :nth-child(1) > .name-column')
				.should('contain', 'William');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '57');

			// Last row on page should be: 78 - Thomas - Lucky number=95
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '78');
			cy
				.get('tbody > :nth-child(10) > .name-column')
				.should('contain', 'Thomas');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '95');
		});

		it('Sorts by Lucky number: Ascending and Descending', function() {
			// Reset test state: Goes to page 1
			cy.get('.pagination > :nth-child(2) > .page-link').click();
			cy.get('.active > .page-link').should('contain', '1');

			// Sorts Lucky number by Asc
			cy.get('thead > tr > .lucky_number-column').click();

			// First row on page should be: 97 - Peter - Lucky number=1
			cy.get('tbody > :nth-child(1) > .id-column').should('contain', '97');
			cy.get('tbody > :nth-child(1) > .name-column').should('contain', 'Peter');
			cy
				.get('tbody > :nth-child(1) > .lucky_number-column')
				.should('contain', '1');

			// Last row on page should be: 30 - Dennis - Lucky number=9
			cy.get('tbody > :nth-child(10) > .id-column').should('contain', '30');
			cy
				.get('tbody > :nth-child(10) > .name-column')
				.should('contain', 'Dennis');
			cy
				.get('tbody > :nth-child(10) > .lucky_number-column')
				.should('contain', '9');
		});
	});
});
