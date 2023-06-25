
export default class BorrowForm{
    borrowId: string;
    expectedReturnDate: string;
    readerId: string;
    readerName: string;
    dateCreated: string;
    isReturned: boolean;
    
    public constructor(borrowId: string, readerId: string, readerName:string, dateCreated: string,  expectedReturnDate: string,returned:boolean){
        this.borrowId = borrowId;
        this.expectedReturnDate = expectedReturnDate;
        this.readerId = readerId;
        this.readerName = readerName;
        this.dateCreated = dateCreated;
        this.isReturned = returned
    }
}