var person = {
    name: 'asdf',
    age: 10,
    hobbies: ['Springing', 'cooking', 'kiting'],
    roleArray: [2, 'author'],
    role: [2, 'author']
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log('LOOP');
    console.log(hobby.toUpperCase());
}
