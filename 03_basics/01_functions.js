// function addTwoNumbers(a,b){
//     console.log(a+b);
// }

function addTwoNumbers(a,b){
        return a+b
    }

const result = addTwoNumbers(4,5)
// console.log("Result: ",result)


// function loginUserMessage(username){
//     if (username){
//         return `${username}'s just logged in`   
//     }
//     else{
//         return "please enter your username"
//     }
// }

function loginUserMessage(username){
    if (!username){    
        console.log("please enter your username")
        return
    }
    else{
        return `${username}'s just logged in`   
    }
}

// console.log(loginUserMessage("Ajay"))
// console.log(loginUserMessage()) // undefined


function calculateCartPrice(...num1){ // it will collect all number which is passed in arguments then to array [ 200, 400, 28, 90 ]
    return num1
}

// console.log(calculateCartPrice(200,400,28,90))

user = {
    username:"ajay",
    age: 23
}

function handleObject(anyobj){
    return `Username is ${user.username} and his age ${user.age}`
}

// console.log(handleObject());
// console.log(handleObject({username:"rohit",age: 27}))

const myArr = [200,400,500,230]

function returnedSecondVal(arr){
    return arr[1]

}

// console.log(returnedSecondVal(myArr))
// console.log(returnedSecondVal([11,33,22,5002,2]))