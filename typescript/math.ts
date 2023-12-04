import { lg } from "./utils";

export const roundDecimal = (n: number, dp = 0) => {
  let dpNum = Math.pow(10, dp)
  let out = Math.floor(n * dpNum) / dpNum;
  lg('roundDecimal():', out)
  return out;
}

export const celsiusToFahrenheit = (c: number) => {
  let out = c * 9 / 5 + 32
  lg('celsiusToFahrenheit():', out)
  return out;
}
export const fahrenheitToCelsius = (f: number) => {
  let out = (f - 32) * 5 / 9;
  lg('fahrenheitToCelsius():', out)
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

export const sumFromZero = (num: number, dp = 0) => {
  const abs = Math.abs(num);
  let limit;
  if (dp) {
    limit = roundDecimal(abs, dp);
  } else {
    limit = Math.floor(abs);
  }
  lg("limit:", limit)
  let out = 0;
  for (let n = limit; n > 0; n--) {
    lg(n)
    out += n;
  }
  /*   if (limit === 1) return 1;
  for (let i = 0; i <= limit; i++) {
    numbers.push(i)
  }
  let out = numbers.reduce((a, b) => a + b); */
  lg(out)
  return out
}

export const findPattern = (arr: number[]) => {
  let arith = new Set(), geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    let pat1 = arr[i] - arr[i - 1];
    arith.add(pat1);
    let pat2 = arr[i] / arr[i - 1];
    geo.add(pat2);
    //lg('arith pattern:', pat1, ', geo pattern:', geo)
  }
  let out = ''
  if (arith.size === 1) out = "Arithmetic"
  else if (geo.size === 1) out = "Geometric"
  else out = "random"
  lg('findPattern:', out)
  return out;
}

export const isPrime = (num: number) => {
  if (num < 2) return false;

  let root = Math.sqrt(num);//Math.ceil
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) return false;
  }
  /*   for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }*/
  //lg(`isPrime(${num}):`, num)
  return true;
}

// Sum All Primes
export const sumAllPrimes = (num: number, dp = 0) => {
  let out = 0;
  let limit = Math.floor(Math.abs(num));
  lg("limit:", limit)
  for (let i = 2; i <= limit; i++) {
    //lg(n)
    if (isPrime(i)) {
      //lg('is prime:', n)
      out += i;
    }
  }
  lg("sumAllPrimes:", out)
  return out;
}

export const isPerfectSquare = (x: number) => {
  let s = parseInt(Math.sqrt(x) + '');
  return (s * s == x);
}
//it is a Fibonacci if and only if one or both of (5*n2 + 4) or (5*n2 – 4) is a perfect square 
export const isFibonacciNumber = (n: number) => {
  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,
  let out = isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
  lg('isFibonacciNumber:', out)
  return out;
}
export const sumOddFibonacciNumber = (n: number) => {
  let nums = generateFibonacciNumUntil(n)
  let out = 0;
  for (let n of nums) {
    if (n % 2 === 1) out += n;
  }
  lg('sumOddFibonacciNumber', out)
  return out;
}
export const generateFibonacciNumUntil = (num: number) => {
  let limit = Math.floor(Math.abs(num));
  let x = 0, y = 1, next;
  let out = [x, y];

  for (let i = 1; i <= limit; i++) {
    //lg(i);
    next = x + y;
    if (next >= limit) break;
    out.push(next)
    x = y;
    y = next;
  }
  lg(`generateFibonacciNumUntil(${num}): ${out}`);
  return out;
}

// for [1, 3]... 6 can be divided by 1, 2, 3
export const smallestCommonMultiple = ([a, b]: [number, number]) => {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let out = leastCommonMultiple(min, max)
  lg("smallestCommonMultiple:", out)
  return out;
}
export const leastCommonMultiple = (min: number, max: number) => {
  function range(min: number, max: number) {
    var arr = [];
    for (var i = min; i <= max; i++) {
      arr.push(i);
    }
    return arr;
  }

  function gcd(a: number, b: number): number {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a: number, b: number) {
    return (a * b) / gcd(a, b);
  }

  var multiple = min;
  range(min, max).forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

/*Map the debris. According to Kepler's Third Law, the orbital period T of two point masses orbiting each other in a circular or elliptic orbit is: 
T = 2π sqrt(axis^3/μ) where axis is the orbit's semi-major axis; μ = GM is the standard gravitational parameter
G is the gravitational constant,
M is the mass of the more massive body. */
type satellite = {
  name: string
  avgAlt: number
}
export const keplerThirdLaw = (arr: satellite[]) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let out = arr.map(obj => {
    let axis = obj.avgAlt + earthRadius;
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(axis ** 3 / GM))
    return { name: obj.name, orbitalPeriod }
  })
  lg('keplerThirdLaw:', out)
  return out;
}