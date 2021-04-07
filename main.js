button.addEventListener('click', calc);
function calc(){
    var Age = parseInt(document.querySelector('#Age').value);
   if ((Age) >= 18) {
       alert('You are major : ' + (Age))
   } else{
       alert('You are minor : ' + (Age));
   }
   } 
   console.log(Age)
