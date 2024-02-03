// Immediately Invoked Function Expressions (IIFE)
// to prevent the global scope pollution we use (IIFE)


(function DbConnection(){
    console.log("DB Connected");
})(); // to end the (IIFE) execution of context we have to use semi-colon ;


(function DB2Connected(){
    // named IIFE
    console.log("DB Two Connected");
})(); 


// (()=>{
//  // unnamed IIFE
//     console.log("Hello")
// })();

// ((name) =>{ 
//     console.log(`Hello ${name}`)
// })("Ajay");
