// function timeConversion(s) {
//     let modified_time = new Date(s).toLocaleString("default",{
//         timeStyle: "medium",
//         hourCycle:"h24"
//     })
//     return modified_time
// }
// console.log(timeConversion("07:05:45PM"))

// let modified_time = new Date()
// console.log(modified_time.toLocaleString('default',{
//     timeStyle:"medium",
//     hourCycle:"h24"
// }))

const convertTime12to24 = (time12h) => {
    time12h = time12h.split(':')
    time12h[3] = " "+time12h[3]
    time12h = time12h.join().split(",").join(":")
    time12h = time12h.split(' ')
    // time12h[2] = time12h[2].replace(':',"")
    // time12h = time12h.join()
    
    // time12h = time12h.replace('^,',':')
    console.log(time12h)
    // const [time, modifier] = time12h.split(' ')
  
    // let [hours, minutes] = time.split(':');
  
    // if (hours === '12') {
    //   hours = '00';
    // }
  
    // if (modifier === 'PM') {
    //   hours = parseInt(hours, 10) + 12;
    // }
  
    // return `${hours}:${minutes}`;
}
  
console.log(convertTime12to24('07:05:45:PM'));