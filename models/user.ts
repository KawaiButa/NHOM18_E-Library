
export default class User
{
    name: String;
    id: String;
    readerType: String;
    address: String;
    dateOfBirth: Date;
    memberDate: Date;

    constructor(id: string, name: string, readerType: string, address: string, dateOfBirth: string, memberDate: string)
    {
        this.name = name;
        this.id = id;
        this.readerType = readerType;
        this.address = address;
        this.dateOfBirth = new Date(dateOfBirth);
        this.memberDate = new Date(memberDate);
    }

}