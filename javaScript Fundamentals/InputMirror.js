// Update the '_' in the code below to solve this problem
process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
var N = parseInt(input[0]);
    var S = input[1];
    console.log(N + " " + S);
});