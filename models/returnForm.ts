import Book from "./Book"

export default class ReturnForm {
    id: string
    borrowId: string
    borrowerId: string
    lostBooks: Array<{id:string, quantity: Number}>
    lateFee: Number
    returnDate: string

    public constructor(id: string, borrowId: string, borrowerId:string, lostBooks:Array<{id:string, quantity: Number}>, lateFee:Number, returnDate:string) {
        this.id = id;
        this.borrowId = borrowId;
        this.borrowerId = id;
        this.lostBooks = lostBooks;
        this.lateFee = lateFee;
        this.returnDate = returnDate;
    }
}