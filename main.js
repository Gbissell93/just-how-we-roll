/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
//Target die images
const six = document.querySelector('img#d6-roll');
const doubleSix1 = document.querySelector('img#double-d6-roll-1');
const doubleSix2 = document.querySelector('img#double-d6-roll-2');
const twelve = document.querySelector('img#d12-roll');
const twenty = document.querySelector('img#d20- roll')
const d6Mean = document.querySelector('#d6-roll-mean');
const d6Median = document.querySelector('#d6-roll-median');
const d6Mode = document.querySelector('#d6-roll-mode');
const dubD6Mean =document.querySelector('double-d6-roll-mean');
const dubD6Median =document.querySelector('double-d6-roll-median');
const dubD6Mode =document.querySelector('double-d6-roll-mode');


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
//TODO Update 'img' element based on number output 
//Six sided die roll============================================================
function rollSix(arr) {
let roll = getRandomNumber(6) 
sixes.push(roll);
d6Mean.innertext = toString(getMean(sixes))
}

//double Six roll ==============================================================
function doubleSixRoll(arr) {
const d1 = getRandomNumber(6);
const d2 = getRandomNumber(6);
doubleSixes.push(d1 + d2);

}






/*******************
 * EVENT LISTENERS *
 *******************/
six.addEventListener('click', rollSix)



/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
//Get median function =========================================================
function getMedian(arr, el) {
  medArr = sortByNumber(arr);
  const middle = Math.round(arr.length / 2);
return  medArr.length % 2 === 0 ? Math.floor((medArr[middle - 1] + medArr[middle]) / 2 ):
medArr[middle]
}


// Get mean function==========================================================
function getMean(arr) {
  let sum = 0;
  let mean = 0
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    sum += currentNum
  }
    mean = sum / arr.length;
    return mean
}


//Get mode funcion ============================================================
function getMode(arr) {
  const compare = {};
  let highestKey;
  for (let i = 0; i < arr.length; i ++) {
    let num = arr[i];
    compare[num] === undefined ? compare[num] = 1 : compare[num]++
  }
  let maxVal = 0;
  for (let i = 0; i < Object.keys(compare).length; i ++) {
   let values = Object.values(compare)[i];
   let keys = Object.keys(compare)[i]
    if (maxVal < values) {
    maxVal = values
    highestKey = keys
   }  
  }
  
  return highestKey
  
}
