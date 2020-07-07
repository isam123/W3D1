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

    addAccount() {
        this.accounts.push({account : new Account(100001)})
        // console.log(this.accounts[0])
        return JSON.stringify(this.accounts[0]); //
        // the question refers ... which returns the number of the
// created account.

    }

    addSavingsAccount(interest) {
        this.accounts.push({account : new SavingAccount(1000013,interest)})
        return JSON.stringify(this.accounts[1]);

    }


    addCheckingAccount(overdraft){

         this.accounts.push({account : new CheckingAccount(1000045,overdraft)})
        return JSON.stringify(this.accounts[2]);
    }

    closeAccount(number) {
 
          var filterD=   this.accounts.filter(function (arrayItem) {
                
                return arrayItem.account._number!=number
            
        })
               

            return filterD.length;
    }


    accountReport() {

        let report = "";
        this.accounts.forEach((item) =>{
            item.account.deposit(400);
            report+= item.account.toString();
            console.log(report)
        });
        console.log(report)
        return report;
   }

    endOfMonth()  {
        let monthRep = "";
        this.accounts.forEach((item) =>{
            item.account.deposit(400);
           monthRep+= item.account.endOfMonth();

        });
        
    
    return monthRep;
    }
}
