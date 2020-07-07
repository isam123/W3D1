// Next create a Bank class, a Bank object should have an array of Account objects, and have
// addAccount(), addSavingsAccount(interest),
// addCheckingAccount(overdraft) methods each of which returns the number of the
// created account. Also add a closeAccount(number) method that closes (removes from
// the array) the account with that number, and a accountReport() method that returns a 
// String with each account on its own line. Use a static nextNumber variable on the Bank class
// to know what the number for the next account will be. Create Mocha / Chai tests to ensure that
// everything is working.


class Bank {


    static nextNumber = 0;
    accounts=[{}];
    // constructor(accounts) {this.accounts = accounts}

    addAccount() {

        return this.accounts[nextNumber]={account : new Account(100001)}; //
        // the question refers ... which returns the number of the
// created account.

    }

    addSavingsAccount(interest) {
        this.accounts.push({saving : new SavingAccount(1000013,interest)})
        return this.accounts[nextNumber];

    }


    addCheckingAccount(overdraft){
        return this.accounts.push({checking : new CheckingAccount(1000045,overdraft)})
    }

    closeAccount(number) {
        nextNumber =this.accounts[i].getNumber();

            for (let i=0;i<this.accounts.length;i++) {
                
                if(nextNumber === number)
                this.accounts.splice(i,1)

                nextNumber =this.accounts[i].getNumber();

            }
    }


    accountReport() {

        for (const key in object) {
            return key.toString()
        } 
   }

    endOfMonth()  {
        for (const key in object) {
            return key.endOfMonth();
        } 
    }

}