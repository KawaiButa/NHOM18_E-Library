export default class Book{
    id: string;
    name: string;
    author: string;
    imgUrl: string;
    numberOfBooks:number;
    publisher: String;
    constructor(id: string, name: string, author: string, url: string, publisher: String, numberOfBook:number)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.imgUrl = url;
        this.publisher = publisher;
        this.numberOfBooks = numberOfBook;
    }
    
}