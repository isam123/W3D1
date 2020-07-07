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
    accounts=[];
    // constructor(accounts) {this.accounts = accounts}

    addAccount() {
        this.accounts.push({account : new Account(100001)})
        // console.log(this.accounts[0])
        return JSON.stringify(this.accounts[0]); //
        // the question refers ... which returns the number of the
// created account.

    }

    addSavingsAccount(interest) {
        this.accounts.push({saving : new SavingAccount(1000013,interest)})
        return JSON.stringify(this.accounts[1]);

    }


    addCheckingAccount(overdraft){

         this.accounts.push({checking : new CheckingAccount(1000045,overdraft)})
        return JSON.stringify(this.accounts[2]);
    }

    closeAccount(number) {

           this.accounts.forEach(function (arrayItem) {
           
            var a = arrayItem._number ;
            if(a == number) this.accounts.splice(0,1)
            var s = arrayItem._number ;
            if(s == number) this.accounts.splice(1,1)
            var ck = arrayItem._number ;
            if(ck == number) this.accounts.splice(2,1)
            
            
            
        })
               

            return this.accounts.length;
    }


    accountReport() {

        let report = "";
        for (const key in object) {
            // console.log(key.toString());
            report+= key.toString()
        } 
        return report;
   }

    endOfMonth()  {
        let monthRep = "";
        for (const key in object) {
            // console.log(key.endOfMonth())
            report+=key.endOfMonth();
        } 
        return monthRep;
    }

}