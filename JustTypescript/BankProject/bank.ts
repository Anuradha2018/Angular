class Bank {
    bankName : string;
    branch: Branch;
    accounts: Account[] = [];
    constructor(bankName : string, branch: Branch){
        this.bankName = bankName;
        this.branch = branch;
        
    }
    addAccount(account: Account) {
        this.accounts.push(account); 
    }
    displayBankName() {
        console.log(`Bank Name:${this.bankName}`);
    }
    displayBranch(){
        console.log(`Branch Details:-
        BranchName: ${this.branch.branchName},
         BranchCode: ${this.branch.branchCode},
          Address:${this.branch.address.street},${this.branch.address.city},${this.branch.address.state},${this.branch.address.pincode} `);
    }
    
    /*constructor(){

    }
    public get bankName(): string {
        return "Bank Name:" + this._bankName;
    }
    public set bankName(name: string) {
        this._bankName = name;
    }*/

}
class Branch {
    branchName: string;
    branchCode: any;
    address: Address;
    constructor(branchName: string, branchCode: any,address: Address ){
        this.branchName = branchName;
        this.branchCode = branchCode;
        this.address = address;
    }
}
class Address {
    street: any;
    city: string;
    state: string;
    pincode: number;
    constructor(street: any, city: string,state: string, pincode: number){
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
}
class Account {
    type: string;
    accountNumber: any;
    balance: number = 1000;
    transactions: Transaction[] = [];
    constructor(type: string, accountNumber: any, balance: number){
        
    }
    
}
interface Account {
    
    recordTransactions(transaction: Transaction);
    withdraw(amount:number);
    deposit(amount:number);
}
class SavingsAccount extends Account implements Account{
    _term:number = 5;
    rate:number =10;
    //finalBalance:number;
    constructor(type: string, accountNumber: any, balance: number) {
        super(type, accountNumber, balance);
    } 
    recordTransactions(transaction: Transaction){
        this.transactions.push(transaction);
    }
    deposit(amount: number) {
        let tran1 = new Transaction('SB001',amount,'SBI',1);
        this.recordTransactions(tran1);
       this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        let tran2 = new Transaction('SB001',amount,'SBI',2);
        this.recordTransactions(tran2);
        this.balance = this.balance - amount;
    }
    /*
     get term (): number {
        return this._term;
     } 
     set term (_term:number) {
        console.log(`The term is ${this._term}`)
     } */ 
    interestCalculator() : number {
        
            this.balance = this.balance + (this.balance * this.rate * this._term)/(100*12);
            
        
        return this.balance;
        
    }
}
class CurrentAccount extends Account {
    //transactionAmount: number;//to ask about per day
   minBalance: number = 1000;
   constructor(type: string, accountNumber: any, balance: number) {
    super(type, accountNumber, balance);
} 
recordTransactions(transaction: Transaction){
    this.transactions.push(transaction);
}
deposit(amount: number) {
    let tran1 = new Transaction('SB001',amount,'SBI',1);
    this.recordTransactions(tran1);
    this.balance = this.balance + amount;
}
withdraw(amount: number) {
    if(this.minBalance < (this.balance - amount)) {
        console.log('Low Balance');
        return
    }
    let tran2 = new Transaction('SB001',amount,'SBI',2);
    this.recordTransactions(tran2);
    this.balance = this.balance - amount;
}

}
class Transaction {
    accountNumber: any;
    date: Date;
    amount:number;
    bankName : string;
    tranNumber: number;
    constructor(accountNumber: any, amount:number ,bankName : string, tranNumber: number ){
        this.accountNumber = accountNumber;
        this.date = new Date();
        this.amount = amount;
        this.bankName = bankName;
        this.tranNumber = tranNumber;
    }
    

}
class Customer {
    customerName: string;
    customerAddress: string;
    accountNumber: number;


}

let sb = new SavingsAccount('Savings Bank','SB001', 10000)
let addr = new Address('5, main Street','BBSR','Odisha', 1234);
let branch = new Branch('BGNAGAR','IN001', addr)
let b = new Bank('SBI',branch);
b.displayBankName();
b.displayBranch();
b.addAccount(sb);
//console.log(b);
sb.deposit(5000);
sb.withdraw(1000);
for(let i = 0; i < sb.transactions.length; i++) {
    console.log(sb.transactions[i]);
}
/*sb.term = 12;
console.log(sb.term);*/
console.log(sb);
console.log(sb.interestCalculator());

/*BankName.bankName = 'SBI';
console.log(BankName);*/



