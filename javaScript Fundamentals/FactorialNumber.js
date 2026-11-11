
function printFactorial(n) {
  var factorial = 1; 
  for(var i = 1; i <= n; i++) {
     factorial *= i;
  }
  console.log("The factorial of the given number is:", factorial);
}

function solve(n) {
   printFactorial(n) ;
}
 