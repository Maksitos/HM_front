let userInput = prompt('Введите число');
userInput = Number(userInput);
while (isNaN(userInput)) {
    userInput = prompt('Введите число')
    userInput = Number(userInput)
}
let result = 0;
let i = 1
while (i <= userInput) {
    result += i ** 2
    i += 1
}
console.log(result);

let arr1 = [3, 5, 12, 9, 23, 93, 17];
let arr2 = arr1.filter(elem => (2 < elem && elem < 20))
let arrSum = 0;
arr2.forEach(num => arrSum += num);
console.log(arrSum)

let arr3 = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let arr4 = [];
arr3.forEach(elem => arr4 = arr4.concat(elem));
arr4 = arr4.filter(elem => (typeof elem == 'number' && elem % 2 == 0));
let arrSum2 = 0;
arr4.forEach(num => arrSum2 += num);
console.log(arrSum2);

let userObj = {
    qwe: 'qwe'

}
function getAtribute (someObj) {
    inputKey = prompt('Введите ключ')
    if (inputKey in someObj) {
        console.log('Уже есть')
    } else {
        inputValue = prompt('Введите значение')
        someObj[inputKey] = inputValue
    }    
}
getAtribute(userObj)
console.log(userObj)

