// What is the smallest value of n such that an algorithm whose running time is 100n^2
// runs faster than an algorithm whose running time is 2^n on the same machine?

const calc = (): number => {
    let i = 1
    for (; ; i++) {
        if (100 * i * i < Math.pow(2, i)) {
            break
        }
    }

    return 100 * i * i
}

console.log(calc())