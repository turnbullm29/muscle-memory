// 5 variables
// string
// number 
// array 
// boolean
//object (4 different key value pairs) (string, number, array, booelean)

let fruit = 'mango';
console.log(fruit);

let favoriteNumber = 29;
console.log(favoriteNumber);

const fruits = ['apples', 'strawberry', 'mango', 'pineapple']
console.log(fruits);



// 10 different functions
//pass array
//pass in a callback 
//string
//object
//boolean
//freestyle

function printingredients(toppings) {
    console.log(toppings);
}
function printNewnumbers(mynumber) {
    console.log(mynumber)
}



function secondRotation(sec) {
    let degrotation = 5 *20
}

function doesthisreallywork(boolean){
    if (boolean) {
    console.log('this works')
    }  else {
    console.log('This does not work')
    }
}

const sectionOne = document.getElementById('section-one');
console.log(sectionOne);
const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);
const sectionThree = document.querySelector('section-three');
console.log(sectionThree);
const sectionFour=document.querySelector('sectionFour');
console.log(sectionFour);

//text content

sectionOne.textContent = 'apple';
sectionTwo.textContent = 'kiwi';
sectionThree.textContent = 'mango';
sectionFour.textContent = 'pineapple';

const paraOne = document.querySelector('.paragraph');

paraOne.textContent = 'lemon';

const paraTwo = document.querySelector('.paragraph-two');

paraTwo.textContent = 'kiwi';

const paraThree = document.querySelector('.paragraph-three');

paraThree.textContent = 'cherry';

const paraFour = document.querySelector('.paragraph-four')

paraFour.textContent = 'coconut';

const containerSix = document.createElement('div');
containerSix.classList.add('container-Six');


const sectionSix = document.createElement('h2');
sectionSix.classList.add('section-six');


const paraSix = document.createElement('p');
paraSix.classList.add('paragraph-six');

const body = document.querySelector('body');


body.appendChild(containerSix);

// container section paragraph

const containerSeven = document.createElement('div');
containerSeven.classList.add('container-seven');

const sectionSeven = document.createElement('h2');
sectionSeven.classList.add('section-seven');

const paraSeven = document.createElement('p');
paraSeven.classList.add('paragraph-seven');

body.appendChild(containerSeven);
containerSeven.appendChild(sectionSeven);
containerSeven.appendChild(paraSeven);

const containerEight = document.createElement('div');
containerEight.classList.add('container-eight');

const sectionEight = document.createElement('h2');

sectionEight.setAttribute('id, section-eight');


sectionEight.textContent = 'Hiii';

const paraEight = document.createElement('p');

paraEight.classList.add('paragraph-eight');

paraEight.textContent = 'Kendrick Lamar'
console.log(paraEight);

body.appendChild(containerEight);
containerEight.appendChild(sectionEight);
containerEight.appendChild(paraEight);