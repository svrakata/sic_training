let isDone: boolean = false;
let lines: number = 42;
let name: string = "Anders";


let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]

enum Color { Red, Green, Blue }
let c: Color = Color.Green

function bigHorribleAlert(): void {
    alert("I'm little annoying box!")
}

let f1 = function (i: number): number { return i * i }
let f2 = function (i: number) { return i * i }
let f3 = (i: number): number => { return i * i }
let f4 = (i: number) => i * i

interface Person {
    name: string
    age?: number
    move(): void
}

let p: Person = { name: "Bobby", move: () => { } }
let validPerson: Person = { name: "Bobby", age: 42, move: () => { } }
let invalidPerson: Person = { name: "Bobby", age: false }

interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) !== -1
}


// some shits on classes from TS official

class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

let greeter = new Greeter("world")

class Animal {
    name: string
    constructor(theName: string) { this.name = theName }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name)
    }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters)
    }
}

let sam = new Snake("Sammy the Python")
let tom: Animal = new Horse("Tommy the Palomino")

sam.move()
tom.move(34)

// TS does have private... hmmm

class Animal1 {
    private name: string
    constructor(theName: string) { this.name = theName }
}

class Rhino extends Animal1 {
    constructor() { super("Rhino") }
}

class Employee {
    private name: string
    constructor(theName: string) { this.name = theName }
}

let animal = new Animal1("Goat")
let rhino = new Rhino()
let employee = new Employee("Bob")

animal = rhino
animal = employee

// continue wit y for x

class Point {
    x: number

    constructor(x: number, public y: number = 0) {
        this.x = x
    }

    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    static origin = new Point(0, 0)
}

class PointPerson implements Person {
    name: string
    move() { }
}

let p1 = new Point(10, 20)
let p2 = new Point(25)

class Point3D extends Point {
    constructor(x: number, y: number, public z: number = 0) {
        super(x, y)
    }

    dist() {
        let d = super.dist()
        return Math.sqrt(d * d + this.z * this.z)
    }
}

module Geometry {
    export class Square {
        constructor(public sideLength: number = 0) { }

        area() {
            return Math.pow(this.sideLength, 2)
        }
    }
}

let s1 = new Geometry.Square(5)

import G = Geometry

let s2 = new G.Square(10)

// Generics
// Classes

class Tuple<T1, T2> {
    constructor(public item1: T1, public item2: T2) {

    }
}

interface Pair<T> {
    item1: T
    item2: T
}

let pairToTuple = function <T>(p: Pair<T>) {
    return new Tuple(p.item1, p.item2)
}


let tuple = pairToTuple({ item1: "Hello", item2: "world" })

let employee1: [number, string] = [1, "Steve"]
let person1: [number, string, boolean] = [1, "Steve", true]
let user: [number, string, boolean, number, string]
user = [1, "Steve", true, 20, "Admin"]

// lambdas, fat arrows

function Person (age: number) {
    this.age = age
    this.growOld = function () {
        this.age++
    }
}

var person = new Person(1)

setTimeout(person.growOld, 1000)

setTimeout(function () {
    console.log(person.age)
}, 2000)

