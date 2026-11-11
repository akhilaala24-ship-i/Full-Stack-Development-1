  let N = parseInt(inputChar);
  
  // Write your code here
  let count = 0;
  while(N > 0){
      count ++;
      N = Math.floor(N/10);
  }
  console.log(count);