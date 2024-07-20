listA = ['deepak', 'chiru', 'bharath', 'lohith']

const result = listA.filter((ArrItem) => {
    if( ArrItem != 'deepak' || ArrItem == 'bharath' ){
        return ArrItem
    }
})

console.log(result)


// let result = listA.forEach((ArrItem, ArrIndex)  => {
//     console.log(ArrItem)
//     console.log(ArrIndex)
// });


// console.log(result)