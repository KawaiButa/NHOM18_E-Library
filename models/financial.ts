export default class Financial{
    id: string;
    user: string;
    balance: number;
    totalDebt: Number;
    public constructor(id: string, user: string, balance: number, totalDebt: Number){
        this.id = id;
        this.user = user;
        this.balance = balance;
        this.totalDebt = totalDebt;
    }
}