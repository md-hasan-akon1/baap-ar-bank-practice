document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount=document.getElementById('deposit-amount');
    const newDepositAmount2=parseFloat((newDepositAmount).value);
  //  if(typeof newDepositAmount.value!=='number'){
        //alert("htijfgjhfgjkhgdkjfgh")
  //  }
   //else{
    
    // console.log(newDepositAmount2)
    const previouseAmount=document.getElementById('previouse-amount');
    const newPreviouseAmount=parseFloat(previouseAmount.innerText);
    // console.log(newPreviouseAmount);
    const previouseTotalAmount=document.getElementById('total-amount');
    const previouseTotalAmount2=parseFloat(previouseTotalAmount.innerText);
    // console.log(previouseTotalAmount2);
    const totalAmount=newDepositAmount2+previouseTotalAmount2;
    const finalDeposite=newDepositAmount2+newPreviouseAmount;
    previouseAmount.innerText=finalDeposite;
    previouseTotalAmount.innerText=totalAmount;
    newDepositAmount.value=''
   //}
})