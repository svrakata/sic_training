export { }

interface NodeInterface {
    value: number
    next: Node | null
}

interface LinkedListInterface {
    add(node: Node): void
    remove() :void
}

class Node implements NodeInterface {
    value: number
    next: Node | null
    constructor(value: number, next: Node | null) {
        this.value = value
        this.next = next
    }
}

class LinkedList implements LinkedListInterface {
    constructor() {}
}