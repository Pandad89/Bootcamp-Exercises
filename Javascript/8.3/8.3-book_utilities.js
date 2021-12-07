const book1 = {
    name: "The horrors of learning to code",
    author: "W.H. Yisitnotworking",
    year: 2021,
    publisher: {
        name: 'Codington',
        location: 'United States'
    }
}
const book2 = {
    name: "The splendors of learning to code",
    author: "I.T. Works",
    year: 2023,
    publisher: {
        name: 'Codington',
        location: 'United States'
    }
}
const bookUtils = {
    getFirstPublished(firstBook, secondBook) {
        firstBook.year > secondBook.year ? console.log(secondBook.year) : console.log(firstBook.year);
    },
    setNewEdition(book, edition) {
        book ['newestEdition'] = edition;
        console.log(book.newestEdition);
    },
    setLanguage(book, language) {
        book ['language'] = language;
        console.log(book.language);
    },
    setTranslation(book, language, translator) {
        book ['translation'] = {
            language: language,
            translator: translator
        };
        console.log(book.translation);
    },
    setPublisher(book, name, location) {
        book ['publisher'] = {
            name: name,
            location: location
        };
        console.log(book.publisher);
    },
    isSamePublisher(bookOne, bookTwo) {
        bookOne.publisher.name === bookTwo.publisher.name && bookOne.publisher.location === bookTwo.publisher.location? console.log(true) : console.log(false);
    }

}

bookUtils.getFirstPublished(book1,book2);
bookUtils.setLanguage(book1, 'Hebrew');
bookUtils.setNewEdition(book1, 1923);
bookUtils.setTranslation(book1, 'Amharic', 'The Salami Swami')
bookUtils.setPublisher(book1, 'The horrors of learning to code', 'United States');
bookUtils.isSamePublisher(book1, book2);