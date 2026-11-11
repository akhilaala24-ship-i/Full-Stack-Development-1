// Fill the blank(__) to compete the following template
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data',function(chunk){
   input += chunk; 
});
process.stdin.on('end',function(){
  input = input.split('\n');
//   accepts the count of test cases in t  
  let t = parseInt(input[0]);
// itterating for each test case  
  for(let i = 1;i<=t;i++){
    //   taking input for each test case
    const S = input[i];
    const X = S+S;
    console.log(X);
  }
});