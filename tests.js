describe("Saving accounts",function(){
// Arrange 

    let saving = new SavingAccount(10000012344,2.5);
    saving.deposit(3000);
    // saving.addInterest();
    console.log(saving.getBalance())

//end Arrange


//begin Assertion

    it("Performs all of the account type operations" , () =>{
        
        // assert.equal(saving.deposit(3000),3000);
        assert.equal(saving.addInterest(),3075);
        assert.equal(saving.getBalance(),3075);
        
    })

})

//end Assertion

describe("Checking Accounts",function(){

    let checking = new CheckingAccount(12000012344,500);
    checking.deposit(3000);
    // console.log(checking.withdraw(3100))
   

    it("Performs all of the Checkingaccount operations" , () =>{
        assert.equal(checking.withdraw(3100),-100);
        assert.equal(checking.getBalance(),-100);
    })
})



describe("Bank information",function(){

  
    let bankInfo = new Bank();
 
    // console.log(checking.withdraw(3100))
   

    it("Performs all of the Bank report" , () =>{
        assert.equal(bankInfo.addAccount(),JSON.stringify({account : new Account(100001)}));
        assert.equal(bankInfo.addSavingsAccount(2.5),JSON.stringify({account : new SavingAccount(1000013,2.5)}));
        assert.equal(bankInfo.addCheckingAccount(500),JSON.stringify({account : new CheckingAccount(1000045,500)}));
        assert.equal(bankInfo.closeAccount(1000013),2);
        assert.equal(bankInfo.endOfMonth()," Interest Added, Saving Account Added 1000013: balance 410 Warning, low balance CheckingAccount 1000045: balance :400 overdraft limit 500");
        assert.equal(bankInfo.accountReport(),"Account 100001: balance 800 Saving Account1000013:has balance of810 CheckingAccount1000045: balance of:800")
        
        
    })
})
