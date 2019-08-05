// STATIC
// accessiable only in the base and derivative classes
// accessiable outside

class Plant {
    static height = 0
    static grow() {
        Plant.height++
    }
}

// static is only usable within the class

class Pear extends Plant {
    grow() {
        Plant.grow()
    }
}

const plum = new Plant()
plum.grow()


// PRIVATE
// accessiable only within the base class not in the derivatives
console.log(mark.energy);
class Vehicle {
    private speed = 0
    private accelerate() {
        this.speed++
    }
}


class Car extends Vehicle {
    
}

const newCar = new Vehicle()
newCar.speed // error


// PROTECTED
// accessiable only within the base class and derivative classes not in instances

class Human {
    protected energy = 0
    
    protected eat() {
        this.energy++
    }
}

class Man extends Human {
    eat() {
        this.energy++
    }
}

const mark = new Man()

console.log(mark.energy); // error