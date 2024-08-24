interface Book {
  id: number;
  title: string;
  author: string;
  genre: string | Genre;
  quantity: number;
}

let book1: Book = {
  id: 1,
  title: "Thine Holy Name",
  author: "Matt Handerson",
  genre: "Spiritual",
  quantity: 2,
};

let book2: Book = {
  id: 1,
  title: "Thine Holy Name - Vol 1",
  author: "Matt Handerson",
  genre: "Spiritual",
  quantity: 7,
};

type bookFormat = "paperback" | "hardcover" | "ebook";

type LibraryBook = Book & { format: bookFormat };

let myBook: LibraryBook = {
  id: 2,
  title: "Andes Mountain",
  author: "Keith Urban",
  genre: "sweet",
  quantity: 6,
  format: "paperback",
};

enum Genre {
  "Fiction",
  "NonFiction",
  "Mystery",
  " Thriller",
}

let book3: Book = {
  id: 1,
  title: "Thine Holy Name - Vol 1",
  author: "Matt Handerson",
  genre: Genre.Fiction,
  quantity: 7,
};

let books: Array<Book> = [book1, book2, book3];

function searchByTitle(book: Array<Book>, myTitle: string) {
  return book.filter((e) => e.title === myTitle);
}

function searchByAuthor(book: Array<Book>, myAuthor: string) {
  return book.filter((e) => e.author === myAuthor);
}

function searchByGenre(book: Array<Book>, myGenre: string) {
  return book.filter((e) => e.genre === myGenre);
}

function print(book: Array<Book>): void {
  book.forEach((e) => {
    console.log("title:" + e.title);
    console.log("author: " + e.author);
  });
}
print(books);
searchByGenre(books, "Fiction");
