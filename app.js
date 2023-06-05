// // function min(){
// //     console.log(arguments);
// // }

// // function sum(){
// //     const args = Array.from(arguments)
// //     return args.reduce((sum,val)=>{
// //         return sum + val
// //     })
// // }
// // const max = function() {
// //     const args = Array.from(arguments); 
// //     return args.reduce((max,curVal)=>{ 
// //         return curVal> max ? curVal : max
// //     })
// // }

// // function sum(...nums){
// //     return nums.reduce((sum,n) => sum + n)
// // }

// // const sumAll = (...values)=>{
// //     if (!values.length) return undefined
// //     return values.reduce((sum,n)=> sum + n)
// // }

// // function makeFamily(parent1,parent2, ...kids){
// //     return{
// //         parents: [parent1,parent2],
// //         children: kids.length?kids:0
// //     }
// // }

// // // filterByType('number',1,2,3,'a',true)

// // const filterByType= (type, ...vals)=>{
// //     return vals.filter(v => typeof v === type)
// // }

// // const nums = [1,2,4,5643,543,6]

// // const things = [23,45,true,false,0,'hello','goodbye', undefined]

// const palette = ['lavender berry', 'sunflower yellow', 'orchid orange']

// // const paletteCopy = palette.slice();
//  const paletteCopy = ['sky blue',...palette, 'grass green']

//  const tea = {
//     type : 'oolong', 
//     name : 'winter sprout', 
//     origin : 'taiwan'
//  };

//  const teaData = {
//     steepTime: '30 seconds', 
//     brewTemp : 175,
//     origin: 'Japan'
//  }; 

// const tea2 = {...tea}

// const teaTin  = {...tea, price:22.99};

// // const newTea = {...tea, name:'golden frost'}
// const newTea = {name:'golden frost', ...tea}

// const fullTea = {...tea, ...teaData}


// const shoppingCart = [
//     {
//         name: 'honey orchid', 
//         quantity: 2,
//         price : 13.5
//     },
//     {
//         name: 'african solstice', 
//         quantity: 4,
//         price : 1599
//     }
// ]

// const cartCopy= [...shoppingCart]