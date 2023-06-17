
export default class BorrowForm{
    borrowId: String;
    expectedReturnDate: String;
    readerId: String;
    readerName: String;
    dateCreated: String;
    
    public constructor(borrowId: String, readerId: String, readerName:String, dateCreated: String,  expectedReturnDate: String,){
        this.borrowId = borrowId;
        this.expectedReturnDate = expectedReturnDate;
        this.readerId = readerId;
        this.readerName = readerName;
        this.dateCreated = dateCreated;
    }
}