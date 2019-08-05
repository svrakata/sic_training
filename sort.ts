type Comparer<T> = (arg1: T, arg2: T) => number
type Sort<T, U> = (arr: T[], callback: Comparer<U>) => T[]

const arr1 = [{ a: 4 }, { a: 11 }, { a: 3 }]

const sort: Sort<object, number> = (arr1: object[], callback: Comparer<number>): object[] => {
    // here goes the logic
    // wtf to do with the comparer
    // there's 2 types we are ts is looking for, the 1st is the type of items in the array that are going to be sorted same as the return type
    // the 2nd is the type that the comparer is taking to compare 
    callback(1, 3)

    return [{}]
}

sort(arr1, (a, b) => a - b)