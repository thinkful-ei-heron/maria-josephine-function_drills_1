
function getYearOfBirth(age){
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    return 2019 - age;
}

function createGreeting (name, age ){ 
    if (name === 'undefined' || age === 'undefined'){
        throw new Error ('undefined values');
    }
    if (typeof name !== 'string' || typeof age !== 'number'){
        throw new TypeError("invalid type");
    }
    const yearOfBirth = 2019 - age;
    return `Hi, my name is Josephine and I\'m 22 years old. I was born in ${yearOfBirth}.`; 
};

try{
    const greeting1 = createGreeting();
} catch (e) {
    console.error(e)
}
console.log(greeting1);

  