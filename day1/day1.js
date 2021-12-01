import fs from 'fs';

// PART 1:

// const txtToArray = (file) => {
//   fs.readFile(file, (err, data) => {
//     if(err) throw err;

//     const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
//     const intArray = arr.map(Number);
//     countIncrease(intArray);
//   })
// }



// txtToArray('./input.txt');

// PART 2:

const txtToArray = (file) => {
  fs.readFile(file, (err, data) => {
    if(err) throw err;

    const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    const intArray = arr.map(Number);
    const reducedArray = countIncreaseByThree(intArray);
    countIncrease(reducedArray);
  })
}

const countIncrease = (arr) => {
  let count = 0;
  for(let i = 0; i <= arr.length; i++){
    if(arr[i+1] > arr[i]){
      count++;
    }
  }
  console.log('number of increases: ', count);
}

const countIncreaseByThree = (arr) => {
  const summedUpArrays = [];
  for(let i = 0; i <= arr.length; i++){
    if(!arr[i+2]) break;

    const array = [arr[i], arr[i+1], arr[i+2]];
    // console.log(array);
    const sum = array.reduce((pv, cv) => pv + cv, 0);
    summedUpArrays.push(sum);
  }
  return summedUpArrays;
}

txtToArray('./input.txt');

