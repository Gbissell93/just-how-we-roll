/**********
 * DATA *
 **********/

//image function ===============================================================
const changeImage = (i) => {
  return `images/d6/${i}.png`
}
const changeImage2 = (i) => {
  return `images/numbers/${i}.png`
}

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
//Target die images
const six = document.querySelector('img#d6-roll');
const doubleSix1 = document.querySelector('img#double-d6-roll-1');
const doubleSix2 = document.querySelector('img#double-d6-roll-2');
const twelve = document.querySelector('img#d12-roll');
const twenty = document.querySelector('img#d20-roll')
const d6Mean = document.querySelector('#d6-rolls-mean');
const d6Median = document.querySelector('#d6-rolls-median');
const d6Mode = document.querySelector('#d6-rolls-mode');
const dubD6Mean = document.querySelector('#double-d6-rolls-mean');
const dubD6Median = document.querySelector('#double-d6-rolls-median');
const dubD6Mode = document.querySelector('#double-d6-rolls-mode');
const d12Mean = document.querySelector('#d12-rolls-mean');
const d12Median = document.querySelector('#d12-rolls-median');
const d12Mode = document.querySelector('#d12-rolls-mode');
const d20Mean = document.querySelector('#d20-rolls-mean');
const d20Median = document.querySelector('#d20-rolls-median');
const d20Mode = document.querySelector('#d20-rolls-mode');
const resetBtn = document.querySelector('#reset-button')
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
six.src = changeImage(roll)
const mean = getMean(sixes);
const mode = getMode(sixes);
const median = getMedian(sixes);
d6Mean.innerText = mean;
d6Median.innerText = median;
d6Mode.innerText = mode;
}

//double Six roll ==============================================================
function doubleSixRoll(arr) {
const d1 = getRandomNumber(6);
const d2 = getRandomNumber(6);
doubleSixes.push(d1 + d2);
doubleSix1.src = changeImage(d1);
doubleSix2.src = changeImage(d2);
const mean = getMean(doubleSixes);
const mode = getMode(doubleSixes);
const median = getMedian(doubleSixes);
dubD6Mean.innerText = mean;
dubD6Median.innerText = median;
dubD6Mode.innerText = mode;
}

//d12 Roll ======================================================================
function rollTwelve(arr) {
  let roll = getRandomNumber(12);
  twelves.push(roll);
  twelve.src = changeImage2(roll);  
  const mean = getMean(twelves);
  const mode = getMode(twelves);
  const median = getMedian(twelves);
  d12Mean.innerText = mean;
  d12Median.innerText = median;
  d12Mode.innerText = mode
}

//d20 roll ======================================================================
function rollTwenty(arr) {
  let roll = getRandomNumber(20);
  twenties.push(roll);
  twenty.src = changeImage2(roll);  
  const mean = getMean(twenties);
  const mode = getMode(twenties);
  const median = getMedian(twenties);
  d20Mean.innerText = mean;
  d20Median.innerText = median;
  d20Mode.innerText = mode;
}
/*******************
 * EVENT LISTENERS *
 *******************/
six.addEventListener('click', rollSix)
doubleSix1.addEventListener('click', doubleSixRoll)
doubleSix2.addEventListener('click', doubleSixRoll)
twelve.addEventListener('click',rollTwelve)
twenty.addEventListener('click',rollTwenty)
resetBtn.addEventListener('click', reset)

/******************
 * RESET FUNCTION *
 ******************/
function reset(){
  window.location.reload(false)
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
//Get median function =========================================================
function getMedian(arr, el) {
  if (arr.length === 1) {
    return arr[0]
  }
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
    return mean.fixTo(2)


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
  return Number(highestKey)
}
