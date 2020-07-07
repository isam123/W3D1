

// Create a CheckingAccount class by extending Account. In addition to the attributes of an
// Account, it should have an overdraft limit variable. The overdraft amount indicates how much
// a person is allowed to temporarily withdraw beyond what they have. In other words, it’s the
// amount that an account is allowed to go into the red (negative balance). Be sure to set this value
// in the constructor and create a getter and a setter for it. Also make sure that you override the
// withdraw(amount) method and the toString() method. Test with Mocha / Chai tests.
// Interest added SavingsAccount 2: balance: 102.5 interest: 2.5
// Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500

class CheckingAccount extends Account {

    constructor (accountNumber,overdraft) {  super(accountNumber) , this.overdraft = overdraft }

    get overdraft() {
        return this._overdraft;
    }

    set overdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {

        if( -1*(this.getBalance() - amount) < this.overdraft ){
            this._balance=(this.getBalance()) - amount
            return this.getBalance()
        }
        else {
            throw new RangeError("Withdraw overdraft must be less than 500");
        }
            
            // this.toString()
            

    }

    toString() {

        return " CheckingAccount"+ this.getNumber()+": balance of:"+this.getBalance();

    }

    endOfMonth() {

        if(this.getBalance() >0) {
        return " Warning, low balance CheckingAccount "+
        this.getNumber()+": balance :"+this.getBalance()+" overdraft limit "+this.overdraft;
    }
    }
}
