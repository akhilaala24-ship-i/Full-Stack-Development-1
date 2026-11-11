// Update the '_' in the code below to solve this problem
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
  let pos = 1;
  for(let i = 1;i<=t;i++){
    //   taking input for A and B.
    const [A,B] = input[pos].split(' ').map(Number);
    // taking input for C, D and E
    const [C,D,E] = input[pos+1].split(' ').map(Number);
    console.log(A+" "+B+" "+C+" "+D+" "+E);
    pos += 2;
  }
});