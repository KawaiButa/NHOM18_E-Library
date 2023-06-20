
export default class Reader{
    readerId: string;
    name:string;
    readerType: string;
    address: string;
    memberDate: string;
    userId: string;
    email: string;
    dateOfBirth:string;

    public constructor(id: string, name:string, readerType: string, address: string, memberDate: string, user:string, email: string, doB:string){
        this.readerId = id;
        this.name = name;
        this.readerType = readerType;
        this.address = address;
        this.memberDate = memberDate;
        this.userId = user;
        this.email = email;
        this.dateOfBirth = doB;
    }
}