const memorizerWrapper = function (fn) {
    const cached = {}

    return function (n) {
        let value = cached[n]

        if (value === undefined) {
            value = fn(n)
            cached[n] = value
        }

        return value
    }
}

const argumentReporterWrapper = function (fn, fnName) {
    return function (...arg) {
        let res = fn.apply(null, arg)
        console.log(`${fnName} (${arg}) -> ${res}`);
        return res
    }
}

const timeReporterWrapper = function (fn, fnName) {
    return function (...args) {
        console.time(`Reporter ${fnName}`)
        let res = fn.apply(null, args)
        console.timeEnd(`Reporter ${fnName}`)
        return res
    }
}

const factoriel = function (n: number) {
    // n  ne moje da byde < 0 ----> validaciq!!!

    let res = 1
    for (let i = 2; i <= n; i++) {
        res *= i
    }
    return res
}

const numberExecutor = function (start, end, fn) {
    for (let i = start; i <= end; i++) {
        fn(i)
    }
}

let extendedFactoriel = timeReporterWrapper(argumentReporterWrapper(memorizerWrapper(factoriel), 'Extended factoriel'), 'Extended factoriel')

numberExecutor(2, 20, extendedFactoriel)



