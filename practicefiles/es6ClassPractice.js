class Person{
    constructor(name){
        this.name = name;
        this.health = 100;
        this._strength = 3
        this._speed = 3
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log('My Stats are as follows: Strength: ', this._strength , 'Speed:' , this._speed  , 'Health: ' ,this.health)
    }
    drinkSake(){
        this.health += 10
    }
    get speed (){
        return this._speed
    }
    set speed (num) {
        this._speed = num;
    }
}

class Sensei extends Person {
    constructor(name){
        super(name);
        this.health = 200;
        this._speed = 10;
        this._strength = 10
        this.wisdome = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('wise words')
    }
}

const Evan = new Person('Evan');

Evan.sayName()
Evan.showStats()
Evan.drinkSake()
Evan.showStats()
Evan.speed = 5

Evan.showStats()

const Splinter = new Sensei('Splinter')

Splinter.speakWisdom()
Splinter.showStats()
