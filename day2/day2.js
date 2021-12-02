import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(process.cwd())

const text = fs.readFileSync(__dirname + '/input.txt', 'utf8')
const lines = text.split("\n");

// PART 1:
// const getPositionFromArray = (array) => {
//   let forward = 0
//   let depth = 0
//   for (let i = 0; i < array.length; i++) {
//     const [direction, value] = array[i].split(' ');

//     switch (direction) {
//       case 'forward':
//         forward += parseInt(value);
//         break;
//       case 'up':
//         depth -= parseInt(value);
//         break;
//       case 'down':
//         depth += parseInt(value);
//     }
//   }
//   console.log(forward, depth);
//   console.log(forward * depth);
// }

// PART 2:
const getPositionFromArray = (array) => {
  let forward = 0
  let depth = 0
  let aim = 0
  for (let i = 0; i < array.length; i++) {
    const [direction, value] = array[i].split(' ');

    switch (direction) {
      case 'forward':
        forward += parseInt(value);
        depth += parseInt(value) * aim;
        break;
      case 'up':
        aim -= parseInt(value);
        break;
      case 'down':
        aim += parseInt(value);
    }
  }
  console.log(forward, depth);
  console.log(forward * depth);
}

getPositionFromArray(lines);