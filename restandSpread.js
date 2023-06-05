// 1. 
const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)
// 2. 
const findMin = (...args) => Math.min(...args)
// 3. 
const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2})

mergeObjects({
    a: 1, 
    b: 2, 
},
{
    c: 3, 
    d: 4, 
})

// 4. 
const  doubleAndReturnArgs = (arr1, ...obj2) => [...arr1, ...obj2.map(v => v * 2)]

doubleAndReturnArgs([1,2,3],4,4)

// 5. 
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.lengths);
    return[...items.slice(0,idx), ...items.slice(idx + 1)]
}


const extend = (arr1, arr2) => ([...arr1, ...arr2])

//  Return a new object with all the keys and values
// from obj and a new key/value pair 

const tea = {
    type : 'oolong', 
    name : 'winter sprout', 
    origin : 'taiwan'
 };

//  tea['year'] = 2023

//  console.log(tea)
 const addKeyVal =  (...obj) => {
    return {...obj,color:'green'}
} 


const removeKey = (obj,key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj
}


const combine = (obj1,obj2) => ({...obj1, ...obj2})


const update = (...obj) => {
 return {...obj,[key]:val};
}  