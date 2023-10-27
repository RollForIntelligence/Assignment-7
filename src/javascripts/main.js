//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function getMax(x, y, z) {
    if (x > y) {
        return x > z ? x : z
    }
    return y > z ? y : z
}

function getMin(x, y, z) {
    if (x < y) {
        return x < z ? x : z
    }
    return y < z ? y : z
}

function getMean(x, y, z) {
    return (x + y + z) / 3
}

function compare(word1, word2) {
    if (word1.length == word2.length) {
        return 0
    }
    return word1.length > word2.length ? 1 : -1
}

function getCharPerLine(str, indent) {
    let strToReturn = ""
    if (!indent) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                strToReturn += `${str[i]}\n`
            }
        }
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] != ' ') {
                for (let sp = 0; sp < i; sp++) {strToReturn += ' '}
                strToReturn += `${str[i]}\n`
            }
        }
    }

    return strToReturn
}

function arrow(size) {
    let strToReturn = ''
    let count = 1
    while (count <= size) {
        for (let i = 0; i < count; i++) {
            strToReturn += '*'
        }
        strToReturn += '\n'
        count++
    }
    while (count > 0) {
        for (let i = 0; i < count; i++) {
            strToReturn += '*'
        }
        strToReturn += '\n'
        count--
    }
    return strToReturn
}

