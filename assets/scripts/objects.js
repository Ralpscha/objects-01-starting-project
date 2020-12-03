const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level'; //via input verkregen, dit is een dummy

let person = {
    'first name': 'Ralph',
    age: 52,
    hobbies: ['Sports', 'Eating'],
    [userChosenKeyName]: '...',
    greet: function(){
        alert('Hi, there');
    },
    1.5: 'Hello'
};

// person.greet();
person.age = 31;
delete person.age;
person.isAdmin = true;

const keyName = 'last name';

console.log(person);
console.log(person['first name']);
console.log(person[keyName]);
console.log(person[1.5]);
