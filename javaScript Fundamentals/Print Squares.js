  let N = parseInt(inputChar);
  
  // Write your code here
  let x = 1;
  
  let result = [];
  while(x <= N){
      result.push(x*x);
      x++;
  }
  console.log(result.join(' '));