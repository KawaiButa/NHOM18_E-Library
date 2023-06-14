export default class Book{
    id: string;
    name: string;
    author: string;
    imgUrl: string;
    
    constructor(id: string, name: string, author: string, url: string)
    {
        this.id = id;
        this.name = name;
        this.author = author;
        this.imgUrl = url;
    }
    
}