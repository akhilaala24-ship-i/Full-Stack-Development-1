// your code goes here
process.stdin.setEncoding('utf8');
let input = "";
process.stdin.on('data',function(chunk){
    input += chunk;
});
process.stdin.on('end',function(){
    input = input.split("\n");
    let A = parseInt(input[0]);
    let B = parseInt(input[1]);
    let C = parseInt(input[2]);
    let D = parseInt(input[3]);
    let E = parseInt(input[4]);
    console.log(A);
    console.log(B);
    console.log(C);
    console.log(D);
    console.log(E);
});