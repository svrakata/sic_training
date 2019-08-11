// For each function f(n) and time t in the following table, determine the largest
// size n of a problem that can be solved in time t, assuming that the algorithm to
// solve the problem takes f(n) microseconds.

// we have 1 second, 1 minute, 1 hour, 1 day, 1 month, 1 year, 1 century
// 1 second = 1000000 microseconds

type Times = {
    seconds?: number,
    minutes?: number,
    hours?: number,
    days?: number,
    years?: number
}


const getMicroseconds = ({ seconds = 0, minutes = 0, hours = 0, days = 0, years = 0 }: Times = {}): number => {
    const microseconds = 1000000 // in 1 second
    
    if (seconds) {
        return seconds * microseconds
    }

    if (minutes) {
        return minutes * 60 * microseconds
    }

    if (hours) {
        return hours * 60 * 60 * microseconds
    }

    if (days) {
        return days * 24 * 60 * 60 * microseconds
    }

    if (years) {
        return years * 365 * 24 * 60 * 60 * microseconds
    }
}

// make a function which takes the complexity and returns the n

const logN = (): number => {
    let n = 1

    for(;;n++) {

        console.log(n, Math.log(n));
        if (Math.log(n) >= getMicroseconds({ seconds: 1 })) {
            return n
        }

        if (n > Number.MAX_SAFE_INTEGER) {
            return
        }
    }
}

console.log(logN());