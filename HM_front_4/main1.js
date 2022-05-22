someObj = {
    someAtribute: 'five',
    someAtribute2: 'nine',
    numAtr: 4,
    numAtr2: 5,
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
    someMethod(a, b) {
        console.log(this.someAtribute + a + b)
    }
}
someObj2 = {
    someAtribute: 'six'

}
var bindFunc = function(func, context) {
    return function(...args) {
        return func.apply(context, [...args])
    }
}
let somebindFunc = bindFunc(someObj.someMethod, someObj)
somebindFunc(5, 7)
let somebindFunc2 = bindFunc(someObj.someMethod, someObj2);
somebindFunc2(3, 6);

function sumAtr() {
    return function() {
        result = 0
        for (key in this){
            if (isNaN(this[key]) === false) {
                result += this[key]
            }
        }
        return result
    }
}
someObj.sumAtr = sumAtr();
console.log(someObj.sumAtr());

function getNewArray() {
    return function() {
        if ('values' in this) {
            return this.values.filter(number => typeof(number) == 'number')
        } else {
            return 'Values не найден'
        }
    }
}
someObj.getNewArray = getNewArray();
console.log(someObj.getNewArray())
someObj2.getNewArray = getNewArray();
console.log(someObj2.getNewArray())


const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

function getCity(Obj) {
    result = []
    for ([key, value] of Object.entries(Obj)){
        result.push(`${key} - это ${value}`)
    }
    return result
}
console.log(getCity(citiesAndCountries))

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber) {
    return namesOfDays[lang][datNumber-1]
}
console.log(getNameOfDay('ru', 4))


const person = {
    name: 'Vlad',
    ageValidation (someAge) {
        if (someAge<18) {
            return false
        } else {return true}
    },
    setName (someName) {
        this.name = someName
    },
    getName() {
        return this.name
    },
    setAge (someAge) {
        if (this.ageValidation(someAge)){
            this.age = someAge
        } else {this.age = 'Validation Error'}
    },
    getAge() {
        return this.age
    }
};
const person1 = {
    age: 1
};
function setProto (currentObj, protoObj) {
    currentObj.__proto__ = protoObj
}
console.log(person1)
setProto(person1, person)
console.log(person1.name)
person1.setAge(1); 
let b = person1.getAge();
console.log(b)
person1.setAge(20);
let d = person1.getAge();
console.log(d)