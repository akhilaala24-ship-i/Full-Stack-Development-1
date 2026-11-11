// Update the '_' in the code below to solve this problem
process.stdin.setEncoding('utf8')
let input = "";
process.stdin.on('data', function(chunk) {
    input += chunk;
});
process.stdin.on('end', function() {
    input = input.split('\n');
    let [A, B] = input[0].split(" ").map(String);
    let [C, D, E] = input[1].split(" ").map(String);
    let [F, G, H, I] = input[2].split(" ").map(String);
    console.log(A + " " + B + " " + C + " " + D + " " + E + " " + F + " " + G + " " + H + " " + I);
});