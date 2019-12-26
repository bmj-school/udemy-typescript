// Code goes here!

const add = (a: number, b: number=1) => {
    return a+b
}

const printOutput = (output: string | number) => {
    console.log(output)
}

printOutput(add(5,2))
printOutput(add(5))

const hobbies = ['sports', 'cooking']

const activeHobbies = ['hiking']

activeHobbies.push(...hobbies)

const person = {
    name: 'asdf',
    age: 3
}

const copiedPerson = { ...person }

const addAll = (...numbers: number[]) => {
    return numbers.reduce((curRes, curVal) => {
        return curRes + curVal
    }, 0)
}

const addedNumbers = addAll(5,10,11,3.7)
console.log(addedNumbers)

const [h1, h2, ...remainingH] = hobbies

const person2 = {
    nameA: 'asdf',
    ageA: 3
}
const { nameA, ageA } = person2