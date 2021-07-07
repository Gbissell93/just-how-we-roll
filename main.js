/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
//Target die images
// const six = document.querySelector('img#d6-roll');
// const doubleSix1 = document.querySelector('img#double-d6-roll-1');
// const doubleSix2 = document.querySelector('img#double-d6-roll-2');
// const twelve = document.querySelector('img#d12-roll');
// const twenty = document.querySelector('img#d20- roll')

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
//Six sided die roll===============================================================================
const rollSix = () => {
let roll = getRandomNumber(6) 
sixes.push(roll);
}
rollSix()
rollSix()
rollSix()
rollSix()
rollSix()
rollSix()
console.log(sixes)


//Get Median 
const getMedian = (arr) => {
  medArr = sortByNumber(arr);
  const middle = Math.round(arr.length / 2);
return  medArr.length % 2 === 0 ? Math.floor((medArr[middle - 1] + medArr[middle]) / 2 ):
medArr[middle]
}
console.log('median', getMedian(sixes))

const getMean = (arr) => {
  let sum = 0;
  let mean = 0
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    sum += currentNum
  }
    mean = sum / arr.length;
    return mean
}

console.log('mean', getMean(sixes))
/*******************
 * EVENT LISTENERS *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
