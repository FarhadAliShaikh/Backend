import { generate } from "random-words";
import {addition, subtract, multiplication, division, PI, num} from './math2.js'

// the following outputs comes from random-words
console.log(generate());

// the following outputs comes from math2.js
console.log(addition(2, 2));
console.log(subtract(2, 2));
console.log(multiplication(2, 2));
console.log(division(2, 2));
console.log(PI);
console.log(num);


// the following outputs comes from math.js
// there is other way to import the module

// const math = require('./math.js')

// console.log(math.sum(2, 2))
// console.log(math.sub(2, 2))
// console.log(math.mult(2, 2))
// console.log(math.div(2, 2))
// console.log(math.PI)
// console.log(math.num)

// // the following outputs comes from Fruits folder
// const info = require('./Fruits');
// console.log(info);
// console.log(info[0]);
// console.log(info[1].name);



