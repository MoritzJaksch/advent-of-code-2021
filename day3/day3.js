import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const input = fs.readFileSync(__dirname + '/input.txt', 'utf8')
const inputArray = input.split("\n");

// PART 1: 

// const getGammaAndDelta = (input) => {
//   console.log(input[0].length);
//   let gamma = []
//   for (let i = 0; i < input[0].length; i++) {
//     let one = 0
//     let zero = 0

//     for (let j = 0; j < input.length; j++) {
//       if (input[j][i] === '1') {
//         one++
//       } else {
//         zero++
//       }
//     }
//     if (one > zero) {
//       gamma.push('1')
//     } else {
//       gamma.push('0')
//     }
//   }
//   const epsilon = gamma.map(x => x === '1' ? '0' : '1')
//   const gammaDecimal = parseInt(gamma.join(''), 2)
//   const epsilonDecimal = parseInt(epsilon.join(''), 2)
//   console.log(gammaDecimal * epsilonDecimal);
// }

// getGammaAndDelta(inputArray);

//PART 2:

const getRatings = (input, value, index) => {
  let rating = []
  let one = 0
  let zero = 0
    for (let i = 0; i < input.length; i++) {
      if (input[i][index] === '1') {
        one++
      } else {
        zero++
      }
    }
      if (one < zero) {
        input.map(x => {
          if (x[index] === '0') {
            rating.push(x)
          }
        })
      } else {
        input.map(x => {
          if (x[index] === '1') {
            rating.push(x)
          }
        })
      }
      return rating
}

// const getGammaAndDelta = (input) => {
//   console.log(input[0].length);
//   let gamma = []
//   for (let i = 0; i < input[0].length; i++) {
//     let one = 0
//     let zero = 0

//     for (let j = 0; j < input.length; j++) {
//       if (input[j][i] === '1') {
//         one++
//       } else {
//         zero++
//       }
//     }
//     if (one > zero) {
//       gamma.push('1')
//     } else {
//       gamma.push('0')
//     }
//   }
//   const epsilon = gamma.map(x => x === '1' ? '0' : '1')
//   const gammaDecimal = parseInt(gamma.join(''), 2)
//   const epsilonDecimal = parseInt(epsilon.join(''), 2)
//   console.log(gammaDecimal * epsilonDecimal);
// }

// getGammaAndDelta(inputArray);


const getOxygenRating = (input) => {
  let index = 0
  let arrayToCheck = input
  do {
    arrayToCheck = getRatings(arrayToCheck, '1', index)
    index++
  } while (arrayToCheck.length > 1)

  console.log(arrayToCheck)
}


// Oxygen = 101101010110
// Scrubber = 001000111101


getOxygenRating(inputArray)