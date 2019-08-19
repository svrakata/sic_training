// For each function f(n) and time t in the following table, determine the largest
// size n of a problem that can be solved in time t, assuming that the algorithm to
// solve the problem takes f(n) microseconds.

// we have 1 second, 1 minute, 1 hour, 1 day, 1 month, 1 year, 1 century
// 1 second = 1000000 microseconds

type InpTime = {
    seconds?: number,
    minutes?: number,
    hours?: number,
    days?: number,
    years?: number,
    centuries?: number,
}

type Times = {
    type: string, count: number, value: number
}

type Complexity = {
    (n: number): number
}

const getMicroseconds = ({
    seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0,
    years = 0
}: InpTime = {}): Times => {
    const microseconds = 1000000 // in 1 second

    if (seconds) {
        return  {
            type: "seconds",
            count: seconds,
            value: seconds * microseconds,
        }
    }

    if (minutes) {
        return {
            type: "minutes",
            count: minutes,
            value: minutes * 60 * microseconds
        }
    }

    if (hours) {
        return {
            type: "hours",
            count: hours,
            value: hours * 60 * 60 * microseconds
        }
    }

    if (days) {
        return {
            type: "days", 
            count: days,
            value: days * 24 * 60 * 60 * microseconds
        }
    }

    if (years) {
        return {
            type: "years",
            count: years,
            value: years * 365 * 24 * 60 * 60 * microseconds
        }
    }
}

// make a function which takes the complexity and returns the n

const maxN = (complexity: Complexity, time: Times): string => {
    let n = 1

    for (; ; n++) {
        const calcs = complexity(n)
        if (calcs >= time.value) {
            return `Max number of calculations is ${n} for ${time.count} ${time.type}`
        }

        if (n > Number.MAX_SAFE_INTEGER) {
            return `The number of calculations exceeds ${Number.MAX_SAFE_INTEGER} count`
        }
    }
}

console.log(maxN(n => Math.pow(2, n), getMicroseconds({ years: 100 })));