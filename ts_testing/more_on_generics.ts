// ts docs

function identity(arg: number): number {
    return arg
}


function identity_gen<T>(arg: T): T {
    return arg
}

// generic types

let myIdentity: <T>(arg: T) => T = identity_gen
let myIdentity2: { <T>(arg: T): T } = identity_gen

interface GenericIdenttyFn {
    <T>(arg: T): T
}
// da fuq?
let myIdentity3: GenericIdenttyFn = identity_gen
console.log(myIdentity2);

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

const x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a')
getProperty(x, 'z') // error

function create<T>(c: { new(): T }): T {
    return new c()
}

class BeeKeeper {
    hasMask: boolean
}

class ZooKeeper {
    nametag: string
}

class Animal {
    numLegs: number
}

class Bee extends Animal {
    keeper: BeeKeeper
}

class Lion extends Animal {
    keeper: ZooKeeper
}

function createInstance<A extends Animal> (c: new () => A) : A {
    return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask
