export default class FeeReceipt{
    id: string;
    user:string;
    balance: number;
    totalDebt: number;
    amountPaid:number;
    public constructor(id: string, user: string, balance: number, totalDebt: number, amountPaid:number){
        this.id = id;
        this.user = user;
        this.balance = balance;
        this.totalDebt = totalDebt;
    }
}