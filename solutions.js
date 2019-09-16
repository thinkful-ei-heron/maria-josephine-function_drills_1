
function getYearOfBirth(age){
    return 2019 - age;
}

function createGreeting (name, age ){ 
    const yearOfBirth = 2019 - age;
    return `Hi, my name is Josephine and I\'m 22 years old. I was born in ${yearOfBirth}.`; 
};

const greeting1 = createGreeting();
console.log(greeting1);
