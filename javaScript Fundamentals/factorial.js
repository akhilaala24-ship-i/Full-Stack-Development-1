  let N = parseInt(inputChar);
  
  // Write your code here
  let fact = 1;
  let i = 1;
  while(i <= N){
      fact *= i;
      i++;
  }
  console.log(fact);