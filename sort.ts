type Comparer<T> = (arg1: T, arg2: T) => number

type Obj = {
    a: number
}

type OtherObj = {
    a: number,
    b: string,
    c: boolean
}

const arr1 = [{ a: 88 }, { a: 777 }, { a: 567 }, { a: 86 }, { a: 11 }, { a: 3 }, { a: 13 }, { a: 23 }, { a: 5 }]
const arr2 = [{ a: 2, b: 'KKK', c: false }, { a: 33, b: 'KKK', c: false }, { a: 12, b: 'KKK', c: false }, { a: 7, b: 'KKK', c: false }, { a: 1, b: 'KKK', c: false }]

const sort = <T>(arr: T[], comparer: Comparer<T>): T[] => { // <T> will not work in tsx files

    // the comparer is taking the same type and returns number < 0; > 0; == 0;

    // quicksort again
    // let's go

    // partition ---> returns the index of the pivot
    // we have ---> recursion with 2^n complexity

    const partition = (arr: T[], left: number, right: number): number => {
        const pivot = arr[left]
        let l = left + 1
        let r = right
        while (l <= r) {

            if (comparer(arr[l], pivot) > 0 && comparer(arr[r], pivot) < 0) {
                // swap
                const temp = arr[l]
                arr[l] = arr[r]
                arr[r] = temp
            }

            if (comparer(arr[l], pivot) <= 0) {
                l++
            }

            if (comparer(arr[r], pivot) >= 0) {
                r--
            }
        }

        // swap pivot
        arr[left] = arr[l - 1]
        arr[l - 1] = pivot

        return l - 1
    }

    const quickSort = (arr: T[], left: number, right: number): void => {
        if (left < right) {
            let i = partition(arr, left, right)
            quickSort(arr, left, i - 1)
            quickSort(arr, i + 1, right)
        }
    }

    quickSort(arr, 0, arr.length - 1)
    return arr
}

console.log(sort<Obj>(arr1, (a, b) => a.a - b.a))
console.log(sort<OtherObj>(arr2, (a, b) => a.a - b.a))