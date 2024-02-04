const heros = ["IRON-MAN","superman","Batman"]

// const heros = {"1":"IRON-MAN","2":"superman","3":"Batman"}

// for (const i in heros) {
    //     console.log("HERO-ID: ",i,"HERO-NAME: " ,heros[i])
    // }

// heros.forEach((e)=>(console.log("HEROS: ",e)))

// heros.forEach( function (val){
//     console.log(val)
// } )

// function printMe(me){
//     console.log(me)
// }

// heros.forEach(printMe)

// heros.forEach( (item, index, arr) => (console.log(item,index,arr)))

// [{},{},{}]

const coding = [
    {
        language:"java",
        extension:".java"
    },
    {
        language:"python",
        extension:".py"
    },
]

coding.forEach( (item) => (console.log(`lanuage: ${item.language}, Extension: ${item.extension}`)) )