const somename = 'Vasya';
function seyHello(text) {
    if (typeof(text) == 'string') {
        console.log(`Hello ${text}!`);
    } else {
        console.log('Не тот тип данных.')
}
}
seyHello(somename);
seyHello(1234);


console.log(typeof('text'));
console.log(typeof(123));
console.log(typeof([1,2,3,4]));
console.log(typeof(false));
console.log(typeof(1234182374619283789121783249187234978124n));
console.log(typeof(null));
console.log(typeof(undefined));

const arr1 = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function firstFunc(arr) {
    console.log(arr.join(' |'))
}
firstFunc(arr1);


const str1 = 'Вася;Петя;Вова;Олег';
const arr2 = str1.split(';');
console.log(arr2);


function seyHello2(name){
    if (arguments.length == 0) {
        console.log('Привет гость')
    } else {
        console.log(`Привет ${name}`)
    }

}
seyHello2()
seyHello2('Vasya')

const fruits = ['яблоко', 'ананас', 'груша'];
function upperArr (arr) {
    let result = []
    for (var fruit in arr) {
        result.push(arr[fruit].toUpperCase())
    }
    return result 
}
const fruitsInUpperCase = upperArr(fruits)
console.log(fruitsInUpperCase)


function plusOne (...arr) {
    let result = []
    arr.forEach(element => result.push(element + 1))
    return result 
}
const myArr = plusOne(1,2,3,4,5)
console.log(myArr)

function sumAll (...arr) {
    let result = 0
    arr.forEach(element => result += element)
    return result 
}
const somesum = sumAll(1,2,3,4,5,-2)
console.log(somesum)


const arr3 = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
const numberArray = arr3.filter(number => typeof(number) == 'number')
console.log(numberArray)

console.log(1 === true)
function arrayTesting(arr){
    if (arr.some(val => val == true) === true){
        return 'Нашли true';
    } else { return 'Ничего нет'}
}
const haveTrueValue = arrayTesting([0, false, null, 1]);
console.log(haveTrueValue)
const dontHaveTrueValue = arrayTesting([0, false, null, 0]);
console.log(dontHaveTrueValue);