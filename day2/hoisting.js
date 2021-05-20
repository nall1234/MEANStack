
//one
console.log(hello);                                   
var hello = 'world';    

var hello;
console.log(hello);
hello = 'world'

// two
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

var needle;
function test(){
    needle = 'magnet';
    console.log(needle)
}
needle = 'haystack';
test()

//three
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

var brendan;
function print(){
    brendan = 'only okey',
    console.log(brendan)
}
brendan = 'super cool'
console.log(brendan)

//four

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

var food;
function eat(){
    var food;
    food = 'half chicken'
    console.log(food)
    food = 'gone'
}

//five

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

var mean;
console.log(food)
mean = function(){
    var food;
    food = 'chicken';
    console.log(food);
    food = 'fish';
    console.log(food)
}
console.log(food)

//six

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

var genre;
function rewind(){
    var genre;
    genre = 'rock';
    console.log(rock);
    genre = 'r&b'
    console.log (genre)
}
console.log(genre)

seven

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

var dojo;
function learn(){
    var dojo;
    dojo = 'seattle'
    console.log(dojo);
    dojo = 'burbank'
    console.log(dojo)
}
dojo = 'san jose'
console.log(dojo)
learn()
console.log(dojo)
