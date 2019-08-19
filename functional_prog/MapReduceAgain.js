const userData = require('./user_data.json')
const postsData = require('./posts.json')

const sampleData = [
    {
        type: "shoes",
        category: "mokasini",
        model: "Mok1ZY55",
        price: 123,
    },
    {
        type: "hats",
        category: "parka",
        model: "PA1112jj",
        price: 232,
    },
    {
        type: "shoes",
        category: "mokasini",
        model: "Mok33ssl",
        price: 663,
    },
    {
        type: "shoes",
        category: "boots",
        model: "Bort222",
        price: 112,
    },
    {
        type: "hats",
        category: "baseball",
        model: "BB22Lss",
        price: 776,
    },
    {
        type: "hats",
        category: "cowboy",
        model: "CB333;s",
        price: 229,
    },
]

// map, reduce, map and reduce

const Map = (entities, mapFn) => {
    let result = {}

    const emmiter = (key, value) => {
        if (!result.hasOwnProperty(key)) {
            result[key] = []
        }
        result[key].push(value)
    }

    entities.forEach(e => mapFn(e, emmiter))

    return result
}

// mapResult 
// for each prperty do the reducerFN

const Reduce = (mapEntities, reduceFN) => {
    let result = {}

    for (mapKey in mapEntities) {
        result[mapKey] = reduceFN(mapKey, mapEntities[mapKey])
    }

    return result
}

let result = Map(sampleData, (e, emmiter) => {
    const key = "price"

    emmiter(key, e.price)
})

let reduceRes = Reduce(result, (key, arr) => {
    return arr.reduce((a, b) => a + b)
})

console.log(reduceRes);