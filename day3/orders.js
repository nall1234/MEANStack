// function orderSupplies(item, callback){
//     let warehouse;
//     const deliveryTime = Math.random() * 3000;

//     setTimeout(function(){
//         warehouse = {
//             paint: {
//                 product: 'Neon Green Paint',
//                 directions: function(){return 'mix it'}
//             },
//             brush: {
//                 product: 'horsehair brush',
//                 directions: function(){ return 'start painting'}
//             },
//             tarp: {
//                 product: 'a blue tarp',
//                 directions: function(){ return 'put it on the floor'}
//             }
//         };
//         callback(warehouse[item]);
//     }, deliveryTime)
// }

// function recievedItem(item){
//     console.log(`recieved ${item.product}, time to ${item.directions()}`)
//}




// orderSupplies('paint', recievedItem);


// orderSupplies('brush', recievedItem);

//how to guarentee that paint comes before bursh

// one way is to set and inverval and check for one to be completed before the other but doesnt scale as you have more and more flags


// let havePaint = false;

// orderSupplies('paint', function(item){
//     recievedItem(item);

//     havePaint = true;
// })

// orderSupplies('brush', function(item){
//     if (havePaint){
//         recievedItem(item);
//     }else{
//         const timer = setInterval(() => {
//             console.log("....checking on paint");
//             if (havePaint){
//                 recievedItem(item);
//                 clearInterval(timer)
//             }
//         }, 50);
//     }
// })

// orderSupplies('paint', recievedItem);


// orderSupplies('brush', recievedItem);

//using an array to force the correct order. 

// const items = ['paint', 'brush']

// function order (items){
//     console.log(items);
//     const results = [];

//     for (let i = 0; i < items.length; i++){
//         const item = items[i];
//         orderSupplies(item, function(product){
//             console.log('product', product);
//             results[i] = product;

//             if(results.filter(i => i).length ===items.length){
//                 results.forEach(p => recievedItem(p))
//             }
//         })
//     }
// }

// order(items)


// using promises!! use top information





// const paint  = new Promise(function(resolve, reject){
//     console.log('const paint')
//     orderSupplies('paint', resolve)
// });
// const brush  = new Promise(function(resolve, reject){
//     console.log('const brush')
//     orderSupplies('brush', resolve)
// });
// const tarp  = new Promise(function(resolve, reject){
//     console.log('const tarp')
//     orderSupplies('tarp', resolve)
// });


// // paint
// //     .then(function(item){
// //         console.log('promis paint')
// //         recievedItem(item);
// //         return brush;
// //     })
// //     .then(function(item){
// //         console.log('promis brush')
// //         recievedItem(item);
// //     })
// //     .catch(function(error){
// //         console.log(error);
// //     })


// tarp   
//     .then(recievedItem)
//     .then(()=>paint)
//     .then(recievedItem)
//     .then(()=>brush)
//     .then(recievedItem)
//     .catch(function(error){
//         console.log(error)
//     })




// refactored promise

function orderSupplies(item){
    let warehouse;
    const deliveryTime = Math.random() * 3000;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            warehouse = {
                paint: {
                    product: 'Neon Green Paint',
                    directions: function(){return 'mix it'}
                },
                brush: {
                    product: 'horsehair brush',
                    directions: function(){ return 'start painting'}
                },
                tarp: {
                    product: 'a blue tarp',
                    directions: function(){ return 'put it on the floor'}
                }
            };
            if(item in warehouse){
                resolve(warehouse[item]);
            }else{
                reject(new Error(`${item} is out of stock`));
            }
        }, deliveryTime)
    });
}

function recievedItem(item){
    console.log(`recieved ${item.product}, time to ${item.directions()}`)
}


const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');

tarp 
    .then(recievedItem)
    .then(()=>paint)
    .then((item)=>{
        recievedItem(item);
        return brush;
    })
    .then(recievedItem)
    .catch(error=>{
        console.log(error)
    })


    // promise.all  (if any of them fail, it all fails)

    Promise.all([tarp, paint, brush])
            .then(items=>{
                item.forEach(recievedItem);
            })
            .catch(error)