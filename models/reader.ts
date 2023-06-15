
export default class Reader{
    readerId: String;
    name:String;
    readerType: String;
    address: String;
    memberDate: String;

    public constructor(id: String, name:String, readerType: String, address: String, memberDate: String){
        this.readerId = id;
        this.name = name;
        this.readerType = readerType;
        this.address = address;
        this.memberDate = memberDate;
    }
}