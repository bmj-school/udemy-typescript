const person = {
  name: 'asdf',
  age: 10,
  hobbies: ['Springing', 'cooking', 'kiting'],
  roleArray: [2, 'author'], // This is an array
  role: [2, 'author'], // This is an array
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log('LOOP')
  console.log(hobby.toUpperCase())
}