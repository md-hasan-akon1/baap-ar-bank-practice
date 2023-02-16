document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail= document.getElementById('user-email').value;
   const userPass=document.getElementById('user-password').value;
  if(userEmail=="hasan@gmail.com" && userPass==12345){
   window.location.href='http://127.0.0.1:5500/batch5-baap-er-bank/bank-%20pt/main.html'
  }
  else{
    alert('wrong user please try again')
  }
})