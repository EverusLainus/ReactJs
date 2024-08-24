interface Book {
    id: number;
    title: string;
    author: string;
    genre: string | Genre;
    quantity: number;
}
declare let book1: Book;
declare let book2: Book;
type bookFormat = "paperback" | "hardcover" | "ebook";
type LibraryBook = Book & {
    format: bookFormat;
};
declare let myBook: LibraryBook;
declare enum Genre {
    "Fiction" = 0,
    "NonFiction" = 1,
    "Mystery" = 2,
    " Thriller" = 3
}
declare let book3: Book;
declare let books: Array<Book>;
declare function searchByTitle(book: Array<Book>, myTitle: string): Book[];
declare function searchByAuthor(book: Array<Book>, myAuthor: string): Book[];
declare function searchByGenre(book: Array<Book>, myGenre: string): Book[];
