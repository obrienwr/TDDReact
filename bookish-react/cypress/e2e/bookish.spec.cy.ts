import axios from "axios";

describe('Bookish application', () => {
  before(cleanupData);
  afterEach(cleanupData);
  beforeEach(() => {
    // Post each book to the server
    populateData(books, 'books');
  });


  it('Visits the bookish', () => {
    visitSite();
    checkAppTitleIs('Bookish');
  })

  it('Shows a books list', () => {
    visitSite();
    checkBookListExists();
    checkTitlesMatchExpectation();
  })

  it('Navigates to the detail page of each book', () => {
    for (let i = 0; i < books.length; i++) {
      checkNavigateToDetailPage(i);
    }
  });

  it('Searches for a book by title', () => {
    const bookIndex = 1;
    visitSite();
    checkBookListHasLength(books.length);
    typeIntoSearch(books[bookIndex].name);
    checkBookListHasLength(1);
    checkFirstBookInListMatchesBookIndex(bookIndex);
  });

})


//////////////////////////
// Implementation Logic //
//////////////////////////

const defaultBookDescription = 'Descriptive description about the book.';
const books = [
  {name: 'Refactoring', id: '1', description: defaultBookDescription},
  {name: 'Domain-driven design', id: '2', description: defaultBookDescription},
  {name: 'Building Microservices', id: '3', description: defaultBookDescription},
];
const apiUrl = 'http://localhost:8080';

async function cleanupData() {
  return axios
    .delete(`${apiUrl}/books?_cleanup=true`)
    .catch(err => console.error(err));
}

function populateData(items: any[], endpoint: string) {
  return items.map((item) => {
    axios.post(`${apiUrl}/${endpoint}`, item,
      {headers: {'Content-type': 'application/json'}})
  });
}

function visitSite() {
  cy.visit('/');
}

function typeIntoSearch(text: string) {
  cy.get('[data-test="search"] input').type(text);
}

function checkAppTitleIs(title: string) {
  cy.get('h2[data-test="heading"]').contains(title);
}

function checkBookListExists() {
  cy.get('div[data-test="book-list"]').should('exist');
}

function checkTitlesMatchExpectation() {
  cy.get('div.book-item').should((booksJsxList) => {
    expect(booksJsxList).to.have.length(books.length);
    // @ts-ignore
    const titles: string[] = [...booksJsxList].map(x => x.querySelector('h2').innerHTML);
    expect(titles).to.deep.equal(
      books.map(book => book.name)  // List of book names from the books array
    )
  })
}

function checkFirstBookInListMatchesBookIndex(index: number) {
  cy.get('div.book-item')
    .eq(0)
    .should('contain', books[index].name)
}

function checkNavigateToDetailPage(bookIndex: number) {
  visitSite();
  cy.get('div.book-item')
    .eq(bookIndex)
    .contains('View Details')
    .click();
  // Check that the id is in the URL
  cy.url().should('include', `${books[bookIndex].id}`);
  // Check that the book name is in the detail page
  cy.get('h2.book-title').contains(books[bookIndex].name);
}

function checkBookListHasLength(length: number) {
  cy.get('div.book-item').should('have.length', length);
}

