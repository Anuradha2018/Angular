var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bank = /** @class */ (function () {
    function Bank(bankName, branch) {
        this.accounts = [];
        this.bankName = bankName;
        this.branch = branch;
    }
    Bank.prototype.addAccount = function (account) {
        this.accounts.push(account);
    };
    Bank.prototype.displayBankName = function () {
        console.log("Bank Name:" + this.bankName);
    };
    Bank.prototype.displayBranch = function () {
        console.log("Branch Details:-\n        BranchName: " + this.branch.branchName + ",\n         BranchCode: " + this.branch.branchCode + ",\n          Address:" + this.branch.address.street + "," + this.branch.address.city + "," + this.branch.address.state + "," + this.branch.address.pincode + " ");
    };
    return Bank;
}());
var Branch = /** @class */ (function () {
    function Branch(branchName, branchCode, address) {
        this.branchName = branchName;
        this.branchCode = branchCode;
        this.address = address;
    }
    return Branch;
}());
var Address = /** @class */ (function () {
    function Address(street, city, state, pincode) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.pincode = pincode;
    }
    return Address;
}());
var Account = /** @class */ (function () {
    function Account(type, accountNumber, balance) {
        this.balance = 1000;
        this.transactions = [];
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    //finalBalance:number;
    function SavingsAccount(type, accountNumber, balance) {
        var _this = _super.call(this, type, accountNumber, balance) || this;
        _this._term = 5;
        _this.rate = 10;
        return _this;
    }
    SavingsAccount.prototype.recordTransactions = function (transaction) {
        this.transactions.push(transaction);
    };
    SavingsAccount.prototype.deposit = function (amount) {
        var tran1 = new Transaction('SB001', amount, 'SBI', 1);
        this.recordTransactions(tran1);
        this.balance = this.balance + amount;
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        var tran2 = new Transaction('SB001', amount, 'SBI', 2);
        this.recordTransactions(tran2);
        this.balance = this.balance - amount;
    };
    /*
     get term (): number {
        return this._term;
     }
     set term (_term:number) {
        console.log(`The term is ${this._term}`)
     } */
    SavingsAccount.prototype.interestCalculator = function () {
        this.balance = this.balance + (this.balance * this.rate * this._term) / (100 * 12);
        return this.balance;
    };
    return SavingsAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(type, accountNumber, balance) {
        var _this = _super.call(this, type, accountNumber, balance) || this;
        //transactionAmount: number;//to ask about per day
        _this.minBalance = 1000;
        return _this;
    }
    CurrentAccount.prototype.recordTransactions = function (transaction) {
        this.transactions.push(transaction);
    };
    CurrentAccount.prototype.deposit = function (amount) {
        var tran1 = new Transaction('SB001', amount, 'SBI', 1);
        this.recordTransactions(tran1);
        this.balance = this.balance + amount;
    };
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.minBalance < (this.balance - amount)) {
            console.log('Low Balance');
            return;
        }
        var tran2 = new Transaction('SB001', amount, 'SBI', 2);
        this.recordTransactions(tran2);
        this.balance = this.balance - amount;
    };
    return CurrentAccount;
}(Account));
var Transaction = /** @class */ (function () {
    function Transaction(accountNumber, amount, bankName, tranNumber) {
        this.accountNumber = accountNumber;
        this.date = new Date();
        this.amount = amount;
        this.bankName = bankName;
        this.tranNumber = tranNumber;
    }
    return Transaction;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var sb = new SavingsAccount('Savings Bank', 'SB001', 10000);
var addr = new Address('5, main Street', 'BBSR', 'Odisha', 1234);
var branch = new Branch('BGNAGAR', 'IN001', addr);
var b = new Bank('SBI', branch);
b.displayBankName();
b.displayBranch();
b.addAccount(sb);
//console.log(b);
sb.deposit(5000);
sb.withdraw(1000);
for (var i = 0; i < sb.transactions.length; i++) {
    console.log(sb.transactions[i]);
}
/*sb.term = 12;
console.log(sb.term);*/
console.log(sb);
console.log(sb.interestCalculator());
/*BankName.bankName = 'SBI';
console.log(BankName);*/
