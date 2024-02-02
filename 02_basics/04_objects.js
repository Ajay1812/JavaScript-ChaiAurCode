// const tinderUser = new Object() // Sing;eton object

const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Ajay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "a.kumar01@gmail.com",
    username : {
        userfullname : {
            firstname : "Ajay",
            lastname : "kumar"
        },
        location : "Mathura"
    }
}

// console.log(regularUser.username.userfullname.firstname)


const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "a",4 : "b"}

// console.log({...obj1 , ...obj2});
const obj3 = Object.assign({} , obj1,obj2) // {} -> is an optional parameter
// console.log(obj3)

const user = [
    {
        id : 1,
        name : "ajay",
        email : 'a@gmail.com'
    },
    {
        id : 2,
        name : "rohit",
        email : 'r@gmail.com'
    },
    {
        id : 3,
        name : "papa",
        email : 'p@gmail.com'
    }
]

// console.log(user[1].id)
// console.log(Object.keys(tinderUser)) // it return the list of keys
// console.log(Object.values(tinderUser)) // it return the list of values
// console.log(Object.entries(tinderUser)) // convert keys value to list

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    coursename : "Javascript",
    price : 999,
    courseInstructor : "hitesh"
}

// console.log(course['price'])

const {courseInstructor: instructor} = course
// console.log((instructor));

// example JSON Api : 
// {
//     "name" : "Ajay",
//     "courseTaken" : "JavaScript PART 1",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {},
// ]