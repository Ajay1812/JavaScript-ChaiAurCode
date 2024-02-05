const myNums = [1,2,3]

// const total = myNums.reduce( (acc,curr)=>{

//     console.log(`Acc: ${acc}, Curr: ${curr}`)
//     return acc + curr
// },0)

const total = myNums.reduce(function (acc,curr){
    return acc + curr
}, 0)


// console.log(total)


const shopping_cart = [
    {
        coursName: "JS",
        price : 1999
    },
    {
        coursName:"Python",
        price:199
    },
    {
        coursName:"Java",
        price:2999
    },
    {
        coursName:"Data Science",
        price:4999
    }
]

const totalprice =  shopping_cart.reduce( (acc, item)=> item.price + acc, 0 )
console.log(totalprice)
