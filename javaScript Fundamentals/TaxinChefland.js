// Update the '_' in the code below to solve this problem
process.stdin.setEncoding('utf8');
let input  = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let t = parseInt(input[0]);
    for (let i = 1; i <= t; i++) {
        let X = parseInt(input[i]);
        // Write your code here
        if(X > 100){
            console.log(X-10);
        }else{
            console.log(X);
        }
    }
});
