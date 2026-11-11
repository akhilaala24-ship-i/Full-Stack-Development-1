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
        // Accept two integers.
        let N = parseInt(input[i]);
	    if( N % 3 == 0)
	    {
	        console.log("Divisible by 3");
	        
	    }
	    else
	    {
	        console.log("Not divisible by 3");
	    }
	    if( N % 2 == 0)
	    {
	        console.log("Even");
	    }
	    else
	    {
	        console.log("Odd");
	    }    
        
    }
});
