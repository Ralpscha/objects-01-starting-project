const movieList = document.getElementById('movie-list');
movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

let person = {
    'first name': 'Ralph',
    age: 52,
    hobbies: ['Sports', 'Eating'],
    greet: function(){
        alert('Hi, there');
    },
    1.5: 'Hello'
};

// person.greet();
person.age = 31;
delete person.age;
person.isAdmin = true;
console.log(person);
console.log(person['first name']);
console.log(person[1.5]);
