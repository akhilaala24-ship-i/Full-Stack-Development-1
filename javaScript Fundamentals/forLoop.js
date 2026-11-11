var string = 'bolloon';
var counter = 0;
for(var i = 0; i < string.length; i++){
    if(string[i] === 'o'){
        counter += 1;
    }
}
console.log(counter);