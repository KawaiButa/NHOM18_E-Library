export default class Book{
    name: string;
    author: string;
    yearOfPublication: String;
    numberOfPages: number;
    description: string;
    imgUrl: string;
    rating: string;
    
    constructor(name: string, author: string, yearOfPublication: String, description: string, url: string, rating: string)
    {
        this.name = name;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
        this.description = description;
        this.imgUrl = url;
        this.rating = rating;
    }
    
}