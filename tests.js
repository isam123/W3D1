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
        assert.equal(saving.getBalance(),-100);
    })
})



describe("Bank information",function(){

  
    let checking = new Bank();
    checking.deposit(3000);
    // console.log(checking.withdraw(3100))
   

    it("Performs all of the Checkingaccount operations" , () =>{
        assert.equal(checking.withdraw(3100),-100);
        assert.equal(saving.getBalance(),-100);
    })
})