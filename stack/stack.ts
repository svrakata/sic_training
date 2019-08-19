// In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:
// push, which adds an element to the collection, and
// pop, which removes the most recently added element that was not yet removed.

// reverse polish notation - RPN
// polish notation - PN

type Num = {
    type: 'number'
    value: string
}

type Operator = {
    type: 'operator'
    value: string
}

type StackNode = Num | Operator

interface StackInterface {
    stack: (StackNode)[]
    push(node: StackNode): void
    pop(): StackNode
}

class Stack implements StackInterface {
    stack: StackNode[]
    constructor() { this.stack = [] }

    push(node: StackNode) {
        this.stack.push(node)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

}

// typeguards
// https://basarat.gitbooks.io/typescript/docs/types/typeGuard.html

const isNum = (arg: any): arg is Num => arg.num !== 'undefined'
const isOperator = (arg: any): arg is Operator => arg.operator !== 'undefined'


const tokenizer = (code: string, stack: Stack): Stack => {
    let current = 0
    const tokens = Array.from(code)

    // loops through the entire line of code
    // this is from the smallest compiler repo
    while (current < tokens.length) {
        let char = tokens[current]

        // checks for white space and jumps to the next iteration
        const WHITESPACE = /\s/

        if (WHITESPACE.test(char)) {
            current++
            continue
        }

        // checks for number
        const NUMBER = /[0-9]/

        if (NUMBER.test(char)) {
            let value = ''

            while (NUMBER.test(char)) {
                value += char
                char = tokens[++current]
            }

            stack.push({
                type: 'number',
                value
            })

            continue
        }

        const OPERATORS = /[+\-*/]/

        if (OPERATORS.test(char)) {
            stack.push({
                type: 'operator',
                value: char
            })

            current++
            continue
        }

        // else syntax error :D

        throw new Error(`Uncaught SyntaxError: Unexpected token ${char}`)
    }

    return stack
}


// it will be cool if we can read the code from file :D

const stack = tokenizer("2 3 + 3 4 5 *", new Stack())

const parser = () => {

}

console.log(stack);

