let allUser = [];

function BankAccount(accountNumber, name, type, balance){
  this.accountNumber = accountNumber;
  this.name = name;
  this.type =type;
  this.balance = balance;
  this.Active = true;
  allUser.push(this);
  this.deposit = function(amount){
    this.balance += amount;
    return {totalbalance:this.balance, message:"Deposit successfully", depositamount:amount};
};
  this.withdraw = function(amount){
    if(this.balance >= amount){
      this.balance -= amount;
      return {totalbalance:this.balance, message:"Withdrawl successfully", withdrawlamount:amount};
    }else{
      return {totalbalance:this.balance, message:"You have Insufficient Balance", withdrawlamount:0};
    }
};
  this.checkBalance = function(){
    return this.balance;
  };
  this.isActive = function(){
    return this.Active;
  };
};


function getTotalBalance (){
  let totalBalance = allUser.reduce((a, b)=>{return a + b.balance}, 0);
  return totalBalance;
}

let b1 = new BankAccount(123654789, "Paritosh Barman", "saving", 500000);
let b2 = new BankAccount(123654789, "Moumita Roy", "current", 5000000);
let b3 = new BankAccount(789456321, "Puitta Barman", "current", 100);

// console.log(b1);
// console.log(b2);
// console.log(b3);



console.log("********* Welcome to M.P Bank *********")

console.log("Total revenue of M.P Bank is: " + getTotalBalance());
console.log("Total customer is: " + allUser.length);

console.log("********* Thank You *********")


console.log(b3.deposit(10));
console.log(b3.withdraw(10));
console.log(b3.checkBalance());