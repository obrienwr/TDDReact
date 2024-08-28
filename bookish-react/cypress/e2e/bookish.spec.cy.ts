import axios from "axios";

describe('Bookish application', () => {
  const books = [
    {'name': 'Refactoring', 'id': '1'},
    {'name': 'Domain-driven design', 'id': '2'},
    {'name': 'Building Microservices', 'id': '3'}
  ];
  const apiUrl = 'http://localhost:8080';

  function cleanupData(){
    return axios
      .delete(`${apiUrl}/books?_cleanup=true`)
      .catch(err => console.error(err));
  }

  before(cleanupData);

  afterEach(cleanupData);

  beforeEach(() => {
    return books.map((item) => {
      axios.post(`${apiUrl}/books`, item,
        {headers: {'Content-type': 'application/json'}})
    });
  });


  it('Visits the bookish', () => {
    cy.visit('/');
    cy.get('h2[data-test="heading"]').contains('Bookish');
  })

  it('Shows a books list', () => {
    cy.visit('/');
    cy.get('div[data-test="book-list"]').should('exist');
    cy.get('div.book-item').should((booksJsxList) => {
      expect(booksJsxList).to.have.length(books.length);

      // @ts-ignore
      const titles: string[] = [...booksJsxList].map(x => x.querySelector('h2').innerHTML);
      expect(titles).to.deep.equal(
        books.map(book => book.name)
      )
    })
  })

  it('Navigates to the detail pages', () => {
    const bookIndex = 0;
    cy.visit('/');
    cy.get('div.book-item')
      .contains('View Details')
      .eq(bookIndex)
      .click();
    cy.url().should('include', `/book/${books[bookIndex].id}`);
    cy.get('h2.book-title').contains(books[bookIndex].name);
  });

})
