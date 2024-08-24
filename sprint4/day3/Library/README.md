## Problem Statement

Maintain an array of book objects, where each book has the following properties:
id: Unique identifier for the book (numeric).
title: Title of the book (string).
author: Author of the book (string).
genre: Genre of the book (string).
quantity: Number of copies available in the library (numeric).

Initialize the library inventory with a predefined set of books.

Union and Intersection Types: Utilize union and intersection types to define complex data structures and improve type safety:

Define a union type BookFormat to represent different formats of books, such as paperback, hardcover, and ebook.
Create an intersection type LibraryBook by combining the Book interface with the BookFormat union type.

Interface Definitions: Define interfaces to establish clear contracts for data structures:
