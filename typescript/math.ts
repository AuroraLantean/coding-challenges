import { lg } from "./utils";

export const roundDecimal = (n: number, places = 0) => {
  let dpNum = Math.pow(10, places)
  let out = Math.floor(n * dpNum) / dpNum;
  lg('out:', out)
  return out;
}

/* print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five.  */
export const fizzBuzz = (max = 20, n1 = 3, n2 = 5) => {
  let out = [];
  //const n1n2 = n1 * n2;
  for (let i = 0; i <= max; i++) {
    let char = '';
    if (i % n1 === 0) {
      char += 'Fizz';
    }
    if (i % n2 === 0) {
      char += 'Buzz';
    }
    /*     if (i % n1n2 == 0) lg("FizzBuzz");
        else if (i % n1 == 0) lg("Fizz");
        else if (i % n2 == 0) lg("Buzz");
        else lg(i);
     */
    out.push(char || i);
  }
  lg(out)
  return out
}

export const sumFromZero = (num: number) => {
  var numbers = [];
  num = Math.abs(num);
  if (num === 1) return 1;

  for (var i = 0; i <= num; i++) {
    numbers.push(i)
  }
  let out = numbers.reduce((a, b) => a + b);
  lg(out)
  return out
}