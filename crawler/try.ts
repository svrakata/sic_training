interface PointInt {
    x: number
    y: number
}

type PointType = {
    x: number
    y: number
}

const getRectangularAreaInterface = (args: PointInt) => args.x * args.y
const getRectangularAreaAliased = (args: PointType) => args.x * args.y

type test = {
    name: string
    age: number
}

const x: test = {
    name: 'kamen',
    age: 44
}

const x1: { name: string, age: number } = {
    name: 'Kamen',
    age: 44
}

type arr = {
    [index: number]: { name: string, age: number }
}

const arr1: arr = [{ name: 'kamen', age: 44 }]