function greet(name){
    return "Hello, " +  name + "!";
}
function capitalize(text){
  
    return text.toUpperCase();
}


function greetAndCapitalize(name){
   
       var greeting = greet(name);
    return capitalize(greeting);

}


var name = "Alice";
var finalResult = greetAndCapitalize(name);


console.log("Final Result:", finalResult);