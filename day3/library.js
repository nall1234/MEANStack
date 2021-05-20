//build our own library in js

function each(arr, callback){
    for (let index = 0; index<arr.length; index++){
        callback(arr[index], index)
    }
}

const stringArray = ['1', 'dog', 'cat', '2', '3', '4', '5', '6', '7', '8']

each(stringArray, function(element, index){
    // first is interpolation in JS similar to f-string in python
    console.log(`element: ${ element} and index: ${index}`)
    // this is regualar way to write
    console.log('element: '+ element + ' and index: '+ index)
})


each(stringArray, listItem);

function listItem(item){
    console.log(item);
}


function map (arr, callback){
    const results = [];

    for(let index = 0; index < arr.length; index++){
        results.push(callback(arr[index], index))
    }

    return results;
}

let results = map(stringArray, function(element, index){
    return parseInt(element, 10)
})

console.log(results)

function filter(arr, callback){
    const results = [];

    for (let index = 0; index< arr.length; index++){
        if (callback(arr[index], index)){
            results.push(arr[index])
        }
    }

    return results;
}

function reject(arr, callback){
    const results =[]

    for (let index = 0; index<arr.length; index++)
        if (!callback(arr[index],index)){
            results.push(arr[index])
        }

    return results
    
}

results = reject(results, function(element){
    return isNaN(element);
})

console.log(results);


function find(arr, callback) {
    for (let index = 0; index<arr.length; index++){
        if (callback(arr[index], index)){
            return arr[index]
        }
    }
}

console.log(find(results, function(element){
    return element === 4
}))

function reduce(arr, callback, memo){
    const results = [].concat(arr)

    if (memo === undefined){
        memo = results.pop();
    }

    for(let index = 0; index<arr.length; index++){
        memo = callback(memo, arr[index, index])
    }

    return memo
}

results = reduce(results, add)

function add (num1,num2,num3){
    return num1 + num2 +num3;
}

console.log (results)