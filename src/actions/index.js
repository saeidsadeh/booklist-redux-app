export function selectBook(book) {
    console.log('A BOOK has been selected', book.title);
    //selectBook is an ActionCreator , it needs to return an action, an action with with a type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}