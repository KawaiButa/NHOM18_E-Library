import Book from "./Book"

export default class ReturnForm {
    id: string
    borrowId: string
    borrowerId: string
    lostBooks: Array<{id:string, quantity: Number}>
    borrowerName:string
    lateFee: Number
    borrowDate:string
    returnDate: string

    public constructor(id: string, borrowId: string, borrowerId:string, borrowerName:string, lostBooks:Array<{id:string, quantity: Number}>, lateFee:Number,borrowDate:string, returnDate:string) {
        this.id = id;
        this.borrowId = borrowId;
        this.borrowerId = borrowerId;
        this.borrowerName = borrowerName;
        this.lostBooks = lostBooks;
        this.lateFee = lateFee;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }
}