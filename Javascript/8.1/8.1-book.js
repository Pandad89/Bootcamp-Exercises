const book = {
    bookName: "I haven't a clue...", 
    authorName: "W.H. O'dunnit",
    publishingYear: 2026,
    pages: 200,
    chapters: 12,
    letters: 2431,
    genre: "Murder Mystery"
}

function bookInfo(book) {
        console.log(`The book ${book['bookName']} was written by ${book['authorName']} in the year ${book['publishingYear']}`);
}

bookInfo(book);