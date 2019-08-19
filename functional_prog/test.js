const runningCounter = (start) => {
    let val = start

    return (increment = 1) => {
        val = val + increment
        return val
    }

}

const score = runningCounter(0)


const logWrapper = (fn) => (...args) => console.log(fn.apply(null, args))
const scoreLog = logWrapper(score)

// scoreLog()
// scoreLog(1)
// scoreLog(6)

const makeAdder = x => y => x + y
const addTo10Log = logWrapper(makeAdder(10))

addTo10Log(5)

const formatter = formatFn => str => formatFn(str)
const lower = formatter(str => str.toLowerCase())
const lowerLog = logWrapper(lower)


lowerLog(" Holy F Me")

const upperFirst = formatter(str => `${str[0].toUpperCase()}${str.substr(1).toLowerCase()}`)
const upperFirstLog = logWrapper(upperFirst)

upperFirstLog('sssdadsaLssdallLLL')