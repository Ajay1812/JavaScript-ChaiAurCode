// +++++++++++++++++++++++++ Date ++++++++++++++++++++++++++++

let myDate = new Date()
// console.log(myDate) //exmaple - 2024-02-01T08:17:58.158Z
// // console.log(myDate.toString().slice(0,15)) // Thu Feb 01 2024
// // console.log(myDate.toDateString().slice(0,15)) // Thu Feb 01 2024
// console.log(myDate.toISOString().slice(0,10)) // 2024-02-01

// // console.log(myDate.toJSON()) // 2024-02-01T08:21:12.224Z
// // console.log(myDate.toLocaleDateString()) // 2/1/2024 :-> 01 Feb 2024
// console.log(myDate.toLocaleString()) // 2/1/2024, 1:51:12 PM
// console.log(myDate.toLocaleTimeString()) // current local time -> 1:52:34 PM

// console.log(myDate.toTimeString()) // current IST time -> 13:53:21 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()) // Thu, 01 Feb 2024 08:24:10 GMT


// let myCreatedDate = new Date(2024, 0, 31) // 1/31/2024, 12:00:00 AM
// let myCreatedDate = new Date(2024, 0, 31, 11,0) // 1/31/2024, 11:00:00 AM
let myCreatedDate = new Date("2024-02-01") // 2/1/2024, 5:30:00 AM
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // current datetime in miliseconds -> 1706776896825
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // convert into seconds

// let newDate = new Date()
// console.log(newDate.getDate()); 
// console.log(newDate.getMonth() + 1); 
// console.log(newDate.getDay()); // day start from 0 -> monday
// console.log(newDate.getTime()); // time in miliseconds : 1706777240869

// console.log(`${newDate.toLocaleDateString()} and the time is ${newDate.toTimeString()}`)
function clock(){
    let modifiedDate = new Date().toLocaleString('default', {
        // dateStyle:"long",
        timeStyle : "medium",
        hourCycle:"h24"
    })
    console.clear()
    console.log(modifiedDate)
}
// Timer -> 18:57:52 , 18:57:53, ---
// clock()
setInterval(clock, 1000)



