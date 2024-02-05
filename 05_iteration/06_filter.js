const coding = ["ruby","python","java","javascript","c++","swift"]

// forEach

// const languages = coding.forEach( (item)=>{
//     console.log(item)
//     return item // forEach will not return anything
// } )
// console.log(languages) // it return undefined


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (n) => (n>5)) // it will return 

// const newNums = myNums.filter( (n) => {
//     return (n > 5)
// })

// ------ Another method 

// const newNums = []
// myNums.forEach( (n) => {
//     if (n > 5){
//         newNums.push(n)
//     }
// })

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (item) => {
    return (item.genre) === "Science"
} )

userBooks = books.filter( (item) => (item.publish >= 1995) && (item.genre === "History"))
console.log(userBooks)
