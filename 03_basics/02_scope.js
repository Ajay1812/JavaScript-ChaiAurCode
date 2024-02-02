// var c = 300

let a = 300 // global scope

if (true){
    let a = 10
    const b = 20
} // local scope

// console.log(a)
// console.log(b)
// console.log(c) // 30

function one(){
    const user = "Ajay"
    function two(){
        const website = "http://codenfinite.streamlit.app"
        console.log(user)
    }
    // console.log(website) // Error -> website 
    two()
}
// one()

if (true){
    username = "Ajay"
    if (username == "Ajay"){
        website = "http://codenfinite.streamlit.app"
        // console.log(username + " : " +  website)
    }
    // console.log(website)
}

// console.log(username)


// ++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++

// console.log(addOne(500)) // No Error
function addOne(num){
    return num + 1
}

// hoisting
console.log(addTwo(20)) // Error -> Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
