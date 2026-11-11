// Solution

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const lines = input.trim().split('\n');
    const testCase1 = parseInt(lines[0]);
    const testCase2 = parseInt(lines[1]);
    const testCase3 = parseInt(lines[2]);
    const testCase4 = parseInt(lines[3]);
    const testCase5 = parseInt(lines[4]);

    console.log(testCase1);
    console.log(testCase2);
    console.log(testCase3);
    console.log(testCase4);
    console.log(testCase5);
});