// classes
// same as x in y time

class Point {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y)
    }
}

let p1 = new Point(0, 10)
let p2 = new Point(10, 20)
let p3 = p1.add(p2)

class Point3D extends Point {
    z: number
    constructor(x: number, y: number, z:number) {
        super(x, y)
        this.z = z
    }

    add(point: Point3D) {
        let point2D = super.add(point)
        return new Point3D(point2D.x, point2D.y, this.z + point.z)
    }
}

// static
// cannot access the static variables and methods from instances and children
// can access static from children tho

class Something {
    static instances = 0
    constructor() {
        Something.instances++
    }
}


let s1 = new Something()
let s2 = new Something()
console.log(Something.instances)

