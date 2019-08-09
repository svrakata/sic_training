type Comparer<T> = (arg1: T, arg2: T) => number
type Sort<T> = (arr: T[], callback: Comparer<T>) => T[]
type Partiotion<T> = (arr: T[], left: number, right: number) => number
type QuickSort<T> = (arr: T[], left: number, right: number) => void

type Obj = {
    a: number
}

const arr1 = [{ a: 88 }, { a: 777 }, { a: 567 }, { a: 86 }, { a: 11 }, { a: 3 }, { a: 13 }, { a: 23 }, { a: 5 }]

const sort: Sort<Obj> = (arr: Obj[], comparer: Comparer<Obj>): Obj[] => {

    // the comparer is taking the same type and returns number < 0; > 0; == 0;

    // quicksort again
    // let's go

    // partition ---> returns the index of the pivot
    // we have ---> recursion with 2^n complexity

    const partition: Partiotion<Obj> = (arr: Obj[], left: number, right: number) => {
        const pivot = arr[left]
        let l = left + 1
        let r = right
        while(l <= r) {

            if (comparer(arr[l], pivot) > 0 && comparer(arr[r], pivot) < 0) {
                // swap
                const temp = arr[l]
                arr[l] = arr[r]
                arr[r] = temp
            }

            if (comparer(arr[l], pivot) <= 0) {
                l++
            }

            if(comparer(arr[r], pivot) >= 0) {
                r--
            }
        }

        // swap pivot
        arr[left] = arr[l - 1]
        arr[l - 1] = pivot
        
        return l - 1
    }

    const quickSort: QuickSort<Obj> = (arr: Obj[], left: number, right: number) => {
        if (left < right) {
            let i = partition(arr, left, right)
            quickSort(arr, left, i - 1)
            quickSort(arr, i + 1, right)
        }
    }

    quickSort(arr, 0, arr.length - 1)
    return arr
}

console.log(sort(arr1, (a: Obj, b: Obj) => a.a - b.a))