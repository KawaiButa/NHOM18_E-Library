export default class Book{
    id: string;
    name: string;
    author: string;
    imgUrl: string;
    numberOfBooks:number;
    publisher: String;
    publicationYear: number;
    constructor(id: string, name: string, author: string, url: string, publisher: String, numberOfBook:number, publicationYear: number)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.imgUrl = url;
        this.publisher = publisher;
        this.numberOfBooks = numberOfBook;
        this.publicationYear = publicationYear
    }
    
}