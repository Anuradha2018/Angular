class Book {
    author: string;
    name: string;
    price: number;
    rackNo:number;
    status: string;
    edition: string;
    constructor() {

    }
    displayBookDetail(){

    }
    updateStatus() {

    }

}
class Librarian {
    name: string;
    password: any;
    constructor() {

    }
    searchBook() {

    }
    verifyMember(){

    }
    issueBook() {

    }
    calculateFine() {

    }
    createBill() {

    }
    returnBook() {

    }

}
class Transaction {
    transId: number;
    memberId: number;
    bookId: number;
    dateOfIssue: Date;
    dueDate: Date;
    constructor() {

    }
}
class MemberRecord {
    memberId: number;
    type: string;
    dateOfMembership: Date;
    noOfBookIssue: number;
    maxBookLimit: number;
    name: string;
    address: string;
    constructor() {

    }
    retrieveMember() {

    }
    increaseBookIssued() {

    }
    decreaseBookIssue() {

    }
    payBill() {

    }
}
class Bill {
    billNo: number;
    date: Date;
    memberId: number;
    amount: number;
    constructor() {

    }
    billCreate() {

    }
    billUpdate() {
        
    }
}