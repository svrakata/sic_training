export { }

const flightData = [
    {
        "flightNumber": "az-543312",
        "from": {
            "country": "Iraq",
            "city": "Baghdat",
            "airfleet": "Mohhamed"
        },
        "to": {
            "country": "Bulgaria",
            "city": "Sofia",
            "airfleet": "Sofia Airport"
        },
        "date": "12.12.2019 22:22:22",
        "delayIn": 15,
        "delayOut": 15,
        "flightStatus": "crashed",
        "company": "BulgariaAir",
        "companyOrigin": "Bulgaria",
        "passengers": [
            {
                "id": 221321,
                "name": "John",
                "class": 2,
                "ticketPrice": 234,
                "buyingDate": "12.12.2019 22:22:22"
            },
            {
                "id": 221321,
                "name": "John",
                "class": 2,
                "ticketPrice": 234,
                "buyingDate": "12.12.2019 22:22:22"
            },
            {
                "id": 221321,
                "name": "John",
                "class": 2,
                "ticketPrice": 234,
                "buyingDate": "12.12.2019 22:22:22"
            }
        ]
    }
]
//Map( [], fn )


// mapFn( entity, emitter )

// filter entity bool

// reduce( k, [vals] ) -> x


/*
    Map( fd, (o, emmiter) -> {
        let key = o.company

        emmiter(key, o.delayIn)
        emmiter(key, o.delayOut)
    })

    Reduce(key, vals[]) -> vals.length

    MapReduce(fd, (o, emmiter) -> {
            emitter(o.from.country, 1)
    }, avg)
*/

let Map = function (entities, fnMap) {
    let result = {}
    let emmiter = function (key, value) {
        if (!result.hasOwnProperty(key)) {
            result[key] = []
        }
        result[key].push(value)
    }

    entities.forEach(o => fnMap(o, emmiter))
    return result
}

// input: { shoes: [ 22, 45 ], hats: [ 88, 665 ] }
// output: { shoes: 67, hats:  }

let Reduce = function (mapResult, reduceFn) {
    let result = {}

    for(let mapKey in mapResult) {
        let reduceValue = reduceFn(mapKey, mapResult[mapKey])
        result[mapKey] = reduceValue
    }

    return result
}

const MapReduce = function(entities, MapFn, ReduceFn) {
    let mapResult = Map(entities, MapFn)
    let result = Reduce(mapResult, ReduceFn)
    return result
}

const sum = function (key, arr) {
    return arr.reduce((a, b) => a + b)
}

const count = function (key, arr) {
    return arr.length
}

const avg = function (key, arr) {
    return sum(key, arr) / count(key, arr)
}

const min = function (arr) {
    arr.reduce((a, b) => a < b ? a : b )
}

const max = function (arr) {
    arr.reduce((a, b) => a > b ? a : b )
}

// total average price 

const totalavgPrice = MapReduce(flightData, (o, emmiter) => {
    let key = 'result'
    o.passengers.forEach(p => emmiter(key, p.ticketPrice))
} , count)

console.log(totalavgPrice)

