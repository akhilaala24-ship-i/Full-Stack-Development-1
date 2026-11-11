// fill the blank _ to complete the following template
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
    const N = parseInt(input[i]);
    console.log(N*(-1));
  }
});