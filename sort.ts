type Comparer<T> = (arg1: T, arg2: T) => number
type Sort<T> = (arr: T[], callback: Comparer<T>) => T[]

type Obj = {
    a: number
}

const arr1 = [{ a: 88 }, { a: 777 }, { a: 567 }, { a: 86 }, { a: 11 }, { a: 3 }, { a: 13 }, { a: 23 }, { a: 5 }]

const sort: Sort<Obj> = (arr: Obj[], comparer: Comparer<Obj>): Obj[] => {
    // the comparer is taking the same type and returns number < 0; > 0; == 0;
    // so far the comparer is used to deside if the sorting is descendin ascending

    // quicksort again
    // let's go

    // we have ---> recursion
    // partition ---> returns the index of the pivot

    const partition = (arr: Obj[], left: number, right: number) => {
        const pivot = arr[left].a
        let l = left + 1
        let r = right
        while(l <= r) {

            if (arr[l].a > pivot && arr[r].a < pivot) {
                // swap
                const temp = arr[l]
                arr[l] = arr[r]
                arr[r] = temp
            }

            if (arr[l].a <= pivot) {
                l++
            }

            if(arr[r].a >= pivot) {
                r--
            }
        }

        // swap pivot
        const temp = arr[left]
        arr[left] = arr[l - 1]
        arr[l - 1] = temp
        
        return l - 1
    }

    const quickSort = (arr: Obj[], left: number, right: number) => {
        if (left < right) {
            let i = partition(arr, left, right)
            quickSort(arr, left, i - 1)
            quickSort(arr, i + 1, right)
        }
    }

    quickSort(arr, 0, arr.length - 1)
    return arr
}


// the idea is the comparer to opeate on the type of data you are sorting and to return number 
console.log(sort(arr1, (a: Obj, b: Obj) => a.a - b.a));