class Queue {
    private data = []
    push(item) { this.data.push(item) } // like this you can push anything
    pop() { return this.data.shift() }
}

// with generics

class Queue1<T> {
    private data = []
    push(item: T) {
        this.data.push(item)
    }
    pop(): T | undefined {
        return this.data.shift()
    }
}

function reverse<T>(items: T[]): T[] {
    const toreturn = []
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i])
    }
    return toreturn
}

class Utility {
    reverse<T>(items: T[]) :T[] {
        var toreturn = []
        for (let i = items.length - 1; i >= 0; i--){
            toreturn.push(items[i])
        }

        return toreturn
    }
}

// Design Pattern: Convenience generic

declare function parse<T>(name: string) : T