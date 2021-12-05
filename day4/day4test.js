import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(process.cwd())

const text = fs.readFileSync(__dirname + '/input1.txt', 'utf8')
const lines = text.split("\n\n");

const array = lines.map(line => line.split("\n"));

const splitArray = array.map(line => line.map(word => word.split(" ")));

const cleanSplitArray = splitArray.map(line => line.map(word => word.filter(letter => letter !== "")));

const inputText = fs.readFileSync(__dirname + '/input2.txt', 'utf8')
const input = inputText.split(",")
console.log(input)
const testArray = [
  [
    [ '22', '97', '31', '90', '63' ],
    [ '21', '51', '38', '74', '78' ],
    [ '10', '64', '92', '82', '1' ],
    [ '70', '12', '75', '16', '14' ],
    [ '68', '50', '35', '73', '26' ]
  ],
  [
    [ '70', '89', '12', '80', '76' ],
    [ '14', '18', '16', '4', '91' ],
    [ '34', '64', '43', '51', '71' ],
    [ '6', '78', '30', '5', '13' ],
    [ '57', '42', '15', '73', '24' ]
  ]
]

const testInput = ['83', '40', '67', '98', '4', '50', '35', '73', '26', '64', '92', '82','22', '21', '10', '70', '68', '1', '75', '16', '14', '51', '38', '74', '78', '97', '31', '90', '63']

const bingo = (cards, input) => {
  for (const item of input) {
    console.log(item)
    for (const card of cards) {
      for (const line of card) {
        line.forEach((number, i) => {
          if (number === item) {
            return line[i] = 'x'
          }
        })
      }
      if(checkWincondition(card)) {
        console.log(checkWincondition(card), card)
        console.log('SCORE: ', calculateScore(card, item)) 
      }
    }
  }
}

const checkWincondition = (card) => {
  let amountXDown = 0;
  let amountXAcross = 0;

  card[0].map((number, i) => {
    card.map((line, j) => {
      card[j][i] === 'x' ? amountXDown++ : amountXDown = 0;
    }
    )
  })
  for (const line of card) {
    line.map(number => {
      number === 'x' ? amountXAcross++ : amountXAcross = 0;
    })
  }
  if (amountXDown === 5) {
    return 'down'
  }
  if (amountXAcross === 5) {
    return 'across'
  }
  return false
}

const calculateScore = (card, item) => {
  let score = 0;
  for (const line of card) {
    line.forEach(number => {
      if (number !== 'x') {
        score += Number(number)
      }
    })
  }
  return score * Number(item)
}

bingo(cleanSplitArray, input)