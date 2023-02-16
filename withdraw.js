document.getElementById('withdraw').addEventListener('click',function(){
    const withdraw=document.getElementById('withdraw-input'); 
    const withdrawValue=parseFloat(withdraw.value) ;         
    //  console.log(withdrawValue);
    const withdrawP=document.getElementById('previouse-withdraw');
    const previouseWthdrawValue=parseFloat(withdrawP.innerText);
    // console.log(previouseWthdrawValue);
const totalWithdraw=withdrawValue+previouseWthdrawValue;
const previouseTotalAmount=document.getElementById('total-amount');
const previouseTotalValue=parseFloat(previouseTotalAmount.innerText);
const afterWithdraw=previouseTotalValue-withdrawValue;
previouseTotalAmount.innerText=afterWithdraw;
withdrawP.innerText=totalWithdraw;

     withdraw.value=''
})