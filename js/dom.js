  
 // for login part ;
 const loginForm = document.getElementById('login-form');
 const btn = document.querySelector('.btn');
 const transactionArea = document.getElementById('transaction-area');

 btn.addEventListener('click',function(){
     loginForm.style.display ="none";
     transactionArea.style.display = "block";
 });



 // for banking part 
 const depositBtn = document.getElementById('deposit-btn');
 const withdrawBtn = document.getElementById('withdraw-btn');

 // add event listener for updating;
 depositBtn.addEventListener('click',function(){
     const depositAmountValue = getValue('deposit-amount');
     update("deposit",depositAmountValue)
     update("balance",depositAmountValue)
     document.getElementById('deposit-amount').value = "";
     
 });

 // update withdraw amount
 withdrawBtn.addEventListener('click',function(){
     const withdrawAmountValue = getValue('withdraw-amount');
     update('withdraw',withdrawAmountValue);
     updateBalance('balance',withdrawAmountValue);
     document.getElementById('withdraw-amount').value = "";
 });

 // update amount function;
 function update(id,inputDeposit){
     const current = document.getElementById(id);
     const currentValue = parseFloat(current.innerText);
     const amount = currentValue + inputDeposit;
     current.innerText = amount;
 }

 // function for getting the value of specific id
 function getValue(id){
     const getAmount = document.getElementById(id);
     const getAmountValue = parseFloat(getAmount.value);
     return getAmountValue;
 }

 // sub amount when withdraw
 function updateBalance(id,inputWithdraw){
     const current = document.getElementById(id);
     const currentValue = parseFloat(current.innerText);
     const amount = currentValue - inputWithdraw;
     current.innerText = amount;
 }
