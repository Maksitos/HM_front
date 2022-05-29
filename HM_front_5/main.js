function Animal(name, age, colour) {
    if(new.target) {
        this.name = name;
        this.age = age;
        this.colour = colour
    } else {
        return new Animal(name, age, colour)
    }
}

const rebbit = Animal('Johny', 3, 'white')
console.log(rebbit)

function Calculator() {
    this.read = function() {
        this.num1 = Number(prompt('Введите первое число'));
        this.num2 = Number(prompt('Введите второе число'));
    }
    this.setAction = function() {
        this.action = prompt('Укажите действие(+,-,*)')
    }
    this.doAction = function() {
        if (this.action == '+') {
            return this.sum();
        } else if (this.action == '-') {
            return this.subtr();
        } else if (this.action == '*') {
            return this.mult()
        }
    }
    this.sum = function() {
        return this.num1 + this.num2
    }
    this.subtr = function() {
        return this.num1 - this.num2
    }
    this.mult = function() {
        return this.num1 * this.num2
    }

}
const someCalculator = new Calculator();
someCalculator.read();
someCalculator.setAction();
const res = someCalculator.doAction();
console.log(res)


function Nums(...args) {
    this.someArgumets = args;
    this.getSum = function() {
        const a = this.someArgumets.reduce((sum, elem, index, array) => {
            if (Number.isInteger(elem)){
                return sum + elem;
            }
            return sum;
        }, 0);
        return a
    };
    this.myFilterReverse = function() {
        this.someArgumets = this.someArgumets.reduce((result, element) => {
            if (Number.isInteger(element)){
                index = 0
                while (element < result[index]) {
                    index += 1
                }
                result.splice(index, 0, element); 
                }
                return result
            }, [])
        };
    }

let someNums = new Nums(1, 2, 4, 7.6, -2, 3, 4, 4.5)
console.log(someNums)
let somSum = someNums.getSum()
console.log(somSum)
someNums.myFilterReverse()
console.log(someNums)

Array.prototype.getUnique = function() {
    return this.reduce((result, element) => {
        if (result.includes(element)==false){
            result.push(element)
        }
        return result
    }, [])
}

let somarr = [1, 2, 3, 4, 5, 3, 4]
let somarr2 = somarr.getUnique()
console.log(somarr2)

Object.prototype.getKeySum = function() {
    result = 0;
    for ([key, value] of Object.entries(this)) {
        if (value) {
            result += value
        }
    }
    return result
}
Object.prototype.reversKey = function() {
    for ([key, value] of Object.entries(this)) {
        this[value] = key;
        delete this[key]
    }
}
let someObj = {a: 1, b: 2, c: 3, d: false, e: 0};
const ssum = someObj.getKeySum()
console.log(ssum)
someObj.reversKey()
console.log(someObj)
function removeUser(arr, index) {
    arr.splice(index, 1)
}
const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 1)
console.log(arr)

const parentDiv = document.getElementById('parent')
parentDiv.style.position = 'relative'
let childDiv1 = document.createElement('div')
childDiv1.id = 'firstChild'
childDiv1.style.zIndex = 2
childDiv1.style.width = '125px'
childDiv1.style.height = '125px'
childDiv1.style.backgroundColor = 'blue'
childDiv1.style.display = 'inline-block'
childDiv1.style.position = 'absolute'

let childDiv2 = document.createElement('div')
childDiv2.id = 'secondChild'
childDiv2.style.zIndex = 4
childDiv2.style.width = '125px'
childDiv2.style.height = '125px'
childDiv2.style.backgroundColor = 'red'
childDiv2.style.display = 'inline-block'
childDiv2.style.marginLeft = '87.5px'
childDiv2.style.marginTop = '87.5px'
childDiv2.style.position = 'absolute'
let childDiv3 = document.createElement('div')
childDiv3.id = 'lastChild'
childDiv3.style.zIndex = 3
childDiv3.style.width = '125px'
childDiv3.style.height = '125px'
childDiv3.style.backgroundColor = 'green'
childDiv3.style.display = 'inline-block'
childDiv3.style.position = 'absolute'
childDiv3.style.marginLeft = '175px'
childDiv3.style.marginTop = '175px'
parentDiv.append(childDiv1, childDiv2, childDiv3 )


const holderDiv = document.querySelector('div.holder')
holderDiv.style.display = 'flex'
holderDiv.style.width = '400px'
holderDiv.style.flexWrap = 'wrap'
let itemsArr = [1, 2, 3, 4, 5]
let colors = ['red', 'green', 'blue', 'violet','yellow']
itemsArr.forEach(element => {
    holderDiv.append(document.createElement('div'))
    holderDiv.getElementsByTagName('div')[element-1].className = 'item';
    holderDiv.getElementsByTagName('div')[element-1].innerText = `${element}`;
    holderDiv.getElementsByTagName('div')[element-1].style.backgroundColor = `${colors[element-1]}`
});
holderDiv.getElementsByTagName('div')[0].style.width = '50%';
holderDiv.getElementsByTagName('div')[4].style.width = '50%'
holderDiv.getElementsByTagName('div')[0].style.borderRadius = '20px 0px 0px 0px'
holderDiv.getElementsByTagName('div')[4].style.borderRadius = '0px 20px 0px 0px'
holderDiv.getElementsByTagName('div')[4].style.order = '2'
holderDiv.getElementsByTagName('div')[0].style.order = '1'
holderDiv.getElementsByTagName('div')[1].style.order = '4'
holderDiv.getElementsByTagName('div')[1].style.width = '20%'
holderDiv.getElementsByTagName('div')[2].style.order = '3'
holderDiv.getElementsByTagName('div')[2].style.width = '40%'
holderDiv.getElementsByTagName('div')[3].style.order = '5'
holderDiv.getElementsByTagName('div')[3].style.width = '40%'
holderDiv.style.justifyContent =  'space-between'
holderDiv.style.textAlign = 'center'
holderDiv.style.border = '1px solid'
holderDiv.style.borderRadius = '20px 20px 0px 0px'


function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}
function modificator ( func ) {
    return function() {
        func('text', 'sample')
    }
}
const testFunc = modificator( sampleFunc )
testFunc();


let names = ['Vasya', 'Igor', 'Maks', 'Dima'];
let lastNames = ['Petrovich', 'Grigorovich', 'Kravchenko'];
let ages = [21, 22, 23];
function Student(name, lastName, age, notebook) {
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.notebook = notebook;
    this.toString = function () {
        return `Name - ${this.name}, Last Name - ${this.lastName}, age - ${this.age}, Have Notebook - ${this.notebook}.`
    }
}
let group =  [];
names.forEach(name => {
    lastNames.forEach(lastName => {
        someAge = ages[Math.floor(Math.random()*3)]
        someNote = (Math.floor(Math.random()*2) < 1)
        someStud = new Student(name, lastName, someAge, someNote);
        group.push(someStud)
    })
});
console.log(group)
function getStudentsList (arrayOfStudents) {
    arrayOfStudents.forEach(element => {
        console.log(String(element))
    });
}
getStudentsList(group)


let somePar = document.createElement('p');
let someImg = document.createElement('img')
someImg.setAttribute('src', 'kotik.JPG')
somePar.innerText = 'Click me \n'
function onParClick () {
    somePar.append(someImg)
    someImg.style.width = '100px';
    someImg.style.height = '100px';
}
somePar.onclick = onParClick
someImg.style.transitionProperty = 'width, height';
someImg.style.transitionDuration = '2s';
someImg.onmouseover = function() {
    this.style.width = '200px'
    this.style.height = '200px'
}
document.body.append(somePar);
someImg.onclick = function () {
    event.stopPropagation();
    someImg.remove();
}


let someMass = [1, 2, 3, 0, 4, 5, 6];
function beforeZero(arr) {
    b = 1
    result = 0
    while (arr[arr.length - b] != 0) {
        result += arr[arr.length - b]
        b += 1
    }
    return result
}
console.log(beforeZero(someMass))


function countToTen(arr) {
    result = 0
    count = 0
    while (result < 10) {
        result += arr[count]
        count += 1
    }
    return count
}
let someMass2 = [1, 9, 3, 6, 0, 4, 5];
console.log(countToTen(someMass2))


let someInput = document.getElementById('someInput')
let someButton = document.getElementById('myBut')

someButton.onclick = function () {
    console.log(someInput.value)
}


let allLink = document.getElementsByTagName('a')
console.log(allLink)

for (let link of allLink) {
    link.addEventListener('mouseover', function() {
        link.innerText += `(${link.href})`
    })
}


let someButton2 = document.getElementById('myBut2')
someButton2.onclick = function () {
    someButton2.remove()
}

let pixel = document.getElementById('pixel');
let pixelLog = document.getElementById('pixelLog');
let kolo = document.getElementById('kolo')
kolo.style.transitionDuration = '0.7s';
kolo.style.transitionProperty = 'margin-left'
pixelLog.onclick = function () {
    console.log(window.getComputedStyle(kolo).marginLeft.slice(0, -2))
    marginNow = parseInt(window.getComputedStyle(kolo).marginLeft.slice(0, -2))
    if(Number.isInteger(parseInt(pixel.value))){
        if (marginNow + parseInt(pixel.value) < 600 && marginNow + parseInt(pixel.value) >= 0) {
            kolo.style.marginLeft = `${marginNow + parseInt(pixel.value)}px`
        } else {
            kolo.style.marginLeft = `0px`
            pixel.value = `ERROR`
        }
    } else {
        pixel.value = ''
    }
}