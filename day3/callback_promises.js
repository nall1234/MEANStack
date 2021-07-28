//callback practice 

const numArray = [99, 23, 253, 488];

// function square(arr){
//     const results = [];

//     for (let i = 0; i < arr.length; i++){
//         const sqr = arr[i] * arr[i];
//         console.log ('looping', i, arr[i], sqr);
//         results.push(sqr)
//     }
//     return results;
// }

// function add(arr){
//     const results = [];

//     for (let i = 0; i<arr.length; i++){
//         const added = arr[i]+arr[i];
//         console.log('looping', i, arr[i], added)

//         results.push(added)
//     }
//     return results
// }


// below is abstracting above to be a mapping callback

function map(arr, callback){
    const results = [];
    for (let i = 0; i<arr.length; i++){
        const result = callback(arr[i], i, arr);
        // console.log('result is', result)
        results.push(result)
    }
    return results
}


// function addTwoValues(num1, num2){
//     return num1+num2;
}


// console.log(map(numArray, function(currentValue){
//     console.log('calling the function', currentValue)
//     return currentValue + currentValue;
// }));


// console.log(map(numArray, function(currentValue){
//     console.log('calling the function', currentValue)
//     return currentValue * currentValue;
// }));


// ES6 => function code of the above, below

// console.log(map(numArray, currentValue => currentValue + currentValue));


// console.log(map(numArray, currentValue => currentValue * currentValue));

// the two below are the same

// const mult = x => y => y * x;

// const mult1 = function (x){
//     return function (y) {
//         return x*y
//     }
// }