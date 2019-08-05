const reverse_string = (str: string) => {
    let new_str = ''
    for (let i = str.length - 1; i >= 0; i--) {
        new_str += str[i]
    }

    return new_str
}


const reverse_recc = (str: string) => {
    if (str === "") {
        return ""
    }

    return reverse_recc(str.substr(1)) + str.charAt(0)
}

console.log(reverse_string('kopraishdomine'))
console.log(reverse_recc('kopraishdomine'))