
//array destructuring 

var array = ['dog', 'cat', 'horse'];

for (var [index, element] of array.entries()){
    console.log(index, element)
}

// create var for each assigned in the []
var [dog, cat] = array;

console.log( dog);

dog = 'evan'

console.log(dog)