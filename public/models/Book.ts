export default class Book{
    name: string;
    author: string;
    yearOfPublication: Date;
    numberOfPages: number;
    description: string;
    imgUrl: string;
    constructor(name: string, author: string, yearOfPublication: Date, description: string, url: string)
    {
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        this.description = description;
        this.imgUrl = url;
    }
    
}