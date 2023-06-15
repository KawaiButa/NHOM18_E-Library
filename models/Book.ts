export default class Book{
    id: string;
    name: string;
    author: string;
    imgUrl: string;
    numberOfBooks:number;
    constructor(id: string, name: string, author: string, url: string, numberOfBook:number)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.imgUrl = url;
        this.numberOfBooks = numberOfBook;
    }
    
}