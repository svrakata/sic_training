function Person(age: number) {
    this.age = age
    this.growOld = function () {
        this.age++
    }
}

const person = new Person(1)
setTimeout(person.growOld, 1000) // this points to window and creates age variable with value undefined++ = NaN

setTimeout(function () {
    console.log(person.age);
}, 2000) // person age stays the same === 1

// lambdas fix this

function Person1 (age: number) {
    this.age = age
    this.growOld = () => {
        this.age++
    }
}

var person1 = new Person1(1)

setTimeout(person1.growOld, 1000)
setTimeout(() => {
    console.log(person1.age); // 2
}, 2000) 