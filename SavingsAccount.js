// Extend the Account class by creating a class called SavingsAccount in a file called
// savingsaccount.js. In addition to the attributes of Account, SavingsAccount
// should have an interest variable, which is set in the constructor and has a getter and a setter
// mehtod. It should also have an addInterest() method which deposits the interest amount
// into the account. The calculation for the amount is balance * interest / 100 . Be sure to also
// overwrite the toString() method, and create Mocha / Chai tests for the methods in
// SavingsAccount. You do not have to test the methods that SavingsAccount receives
// from Account, since they’ve already been tested in Account




class SavingAccount extends Account {

    constructor(accountNumber,interest) {
        super(accountNumber)
        this.interest = interest
    }

    get interest() {
        return this._interest;
    }

    set interest(interest) {
         this._interest = interest;
    }

    addInterest() {
        let amount = (this._interest * this._balance)/100 ;
        this.deposit(amount);
        return this.getBalance()
    }
    
    toString() {
        return " Saving Account" + this._number + ":has balance of" + this._balance;
    }

    endOfMonth() {

        this.addInterest();
        return " Interest Added, Saving Account Added " + this._number + ": balance " + this._balance;
    }
    
    }
