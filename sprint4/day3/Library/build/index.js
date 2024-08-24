let book1 = {
    id: 1,
    title: "Thine Holy Name",
    author: "Matt Handerson",
    genre: "Spiritual",
    quantity: 2,
};
let book2 = {
    id: 1,
    title: "Thine Holy Name - Vol 1",
    author: "Matt Handerson",
    genre: "Spiritual",
    quantity: 7,
};
let myBook = {
    id: 2,
    title: "Andes Mountain",
    author: "Keith Urban",
    genre: "sweet",
    quantity: 6,
    format: "paperback",
};
var Genre;
(function (Genre) {
    Genre[Genre["Fiction"] = 0] = "Fiction";
    Genre[Genre["NonFiction"] = 1] = "NonFiction";
    Genre[Genre["Mystery"] = 2] = "Mystery";
    Genre[Genre[" Thriller"] = 3] = " Thriller";
})(Genre || (Genre = {}));
let book3 = {
    id: 1,
    title: "Thine Holy Name - Vol 1",
    author: "Matt Handerson",
    genre: Genre.Fiction,
    quantity: 7,
};
let books = [book1, book2, book3];
function searchByTitle(book, myTitle) {
    return book.filter((e) => e.title === myTitle);
}
function searchByAuthor(book, myAuthor) {
    return book.filter((e) => e.author === myAuthor);
}
function searchByGenre(book, myGenre) {
    return book.filter((e) => e.genre === myGenre);
}
function print(book) {
    book.forEach((e) => {
        console.log("title:" + e.title);
        console.log("author: " + e.author);
    });
}
print(books);
searchByGenre(books, "Fiction");
//# sourceMappingURL=index.js.map