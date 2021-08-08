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

// function map(arr, callback){
//     const results = [];
//     for (let i = 0; i<arr.length; i++){
//         const result = callback(arr[i], i, arr);
//         // console.log('result is', result)
//         results.push(result)
//     }
//     return results
// }


// function addTwoValues(num1, num2){
//     return num1+num2;
// }

// function doubleValue(num1){
//     console.log('in the callback with number', num1)
//     return num1+num1;
// }
// below is a callback without an annon function
// console.log(map(numArray, doubleValue)



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


//below is sync
// console.log('before')

// function sayHello(name){
//     console.log(`hello ${name}`)
// }

// sayHello('evan')

// console.log('after')


//below is async
// console.log('before')

// function sayHello(name){
//     setTimeout(function(){
//         console.log(`hello ${name}`)
//     },3000)
// }

// sayHello('evan')

// console.log('after')

function getThingFromDatabase(query, callback){
    return setTimeout(function(){
        const data = ['thing1', 'thing2', 'thing3']
        callback(data);
    }, 1500)
}

getThingFromDatabase('select * from things', function(things){
    console.log('things', things)
    things.forEach(thing=> console.log('i got a thing', thing))
});
