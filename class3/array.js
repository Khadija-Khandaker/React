
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //squared
    //even number
    //sum


// square
const map1 = array.map((x) => x ** 2);

console.log(map1);


// even number

function isEven(array) {

      return array % 2 === 0;
    }
const evenNumbers = array.filter(isEven)
console.log(evenNumbers);


//sum
function sumNumbers(acc, current){
  return acc + current
}
const total = array.reduce(sumNumbers)
console.log(total)
