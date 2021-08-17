function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    // var locks in scope so people cant change it without a method
    this.speed = 3;
    var strength = 3;

    this.SayName = function (){
        console.log('My name is ' + this.name )
        return this
    }

    this.showStats = function (){
        console.log('My Stats are: Health: '+self.health + ' Speed: ' + this.speed + ' Strength: ' + strength)
        return this
    }

    this.drinkSake = function(){
        self.health += 10
        return this
    }

    this.punch = function(punched){
        punched.health -= 5;
        console.log(punched.name, "got punched and lost 5 health")
    }

    this.kick = function(kicked){
        var num = strength * 15
        kicked.health -= num
        console.log(num)
        console.log(kicked.name, "got kicked and lost ", num +" health bc ", self.name, "has", strength, " points of strength")

    }
}

var Evan = new Ninja('Evan')
var Cadu = new Ninja('Cadu')

Evan.SayName()

Evan.showStats()
Evan.drinkSake()
Evan.showStats()

Evan.punch(Cadu)

Cadu.showStats()

Cadu.kick(Evan)
Evan.speed = 5

Evan.showStats()