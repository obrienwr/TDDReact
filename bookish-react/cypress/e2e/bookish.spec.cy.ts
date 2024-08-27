import axios from "axios";

describe('Bookish application', () => {
  const books = [
    {'name': 'Refactoring', 'id': '1'},
    {'name': 'Domain-driven design', 'id': '2'},
    {'name': 'Building Microservices', 'id': '3'}
  ];

  function cleanupData(){
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch(err => console.error(err));
  }

  before(cleanupData);

  afterEach(cleanupData);

  beforeEach(() => {
    return books.map((item) => {
      axios.post('http://localhost:8080/books', item,
        {headers: {'Content-type': 'application/json'}})
    });
  });


  it('Visits the bookish', () => {
    cy.visit('http://localhost:3000');
    cy.get('h2[data-test="heading"]').contains('Bookish');
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000');
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
})
