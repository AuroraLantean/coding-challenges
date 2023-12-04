import { lg } from "./utils";

export const factorialsBigint = (input: any): string => {
  //Avoid input name collide with my variable name below by changing the input variable name!
  //ALSO FIX THE FUNCTION NAME FOR RECURSIVE RESPONSE!
  const big0 = BigInt(0);
  const big1 = BigInt(1)
  let bx: bigint;
  try {
    bx = BigInt(input)
    //bx = parseInt(input)
  } catch (err) {
    return '0';
  }//if (isNaN(parseInt(input))) return NaN;

  if (bx < big0) return '0';
  //if (bx < 0) return -1;

  else if (bx == big0) return '1';
  //else if (bx == 0) return 1;

  else {
    return (bx * BigInt(factorialsBigint(bx - big1))).toString();
  }
}
export const factorials = (input: any): bigint => {
  //Avoid input name collide with my variable name below by changing the input variable name!
  //ALSO FIX THE FUNCTION NAME FOR RECURSIVE RESPONSE!
  const big0 = BigInt(0);
  const big1 = BigInt(1);
  let bx: bigint;
  try {
    bx = BigInt(input)
  } catch (err) {
    return big0;
  }//if (isNaN(parseInt(input))) return NaN;

  bx = BigInt(input)
  //const bx = parseInt(input)

  if (bx < big0) return big0;
  //if (bx < 0) return -1;

  else if (bx == big0) return big1;
  //else if (bx == 0) return 1;

  else {
    return (bx * factorials(bx - big1));
  }
  /* 
  First Part of the recursion method
  You need to remember that you won’t have just one call, you’ll have several nested calls
  
  Each call: bx === "?"        	         bx * factorialize(bx - 1)
  1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
  2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
  3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
  4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
  5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
  
  Second part of the recursion method
  The method hits the if condition, it returns 1 which bx will multiply itself with
  The function will exit with the total value
  
  5th call will return (5 * (5 - 1))     // bx = 5 * 4
  4th call will return (20 * (4 - 1))    // bx = 20 * 3
  3rd call will return (60 * (3 - 1))    // bx = 60 * 2
  2nd call will return (120 * (2 - 1))   // bx = 120 * 1
  1st call will return (120)             // bx = 120
  
  If we sum up all the calls in one line, we have
  (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
  */

}

//missing argument => return a function
export const numOrFunc = (...inputs: any[]): any => {
  let [a, b] = inputs;
  let out;
  lg('numOrFunc inputs:', inputs)
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      out = a + b;
    } else if (inputs.length === 1) {
      out = (b: any) => numOrFunc(a, b)
    }
  }
  lg('numOrFunc:', out);
  return out;
}

export const funcArray1 = (funcs: any[]) => {
  return (x: any) => {
    for (const fn of funcs.reverse()) {
      x = fn(x)
    }
    return x;
  }
}
export const funcArray2 = (funcs: any[]) => {
  return (x: any) => funcs.reduceRight((acc: number, f: any) => f(acc), x)
}

export const hiddenCounter = (n: number) => {
  let count = n
  lg('hiddenCounter:', n)
  return function () {
    let out = count++
    lg('counter:', out)
    return out;
  }
}
export const hiddenCounter2 = (n: number) => {
  lg('hiddenCounter2:', n)
  return () => {
    let out = ++n
    lg('counter2:', out)
    return out;
  }
}

//Higher Order Functions for calling only once
export const callOnlyOnce = (fn: any) => {
  let called = false;
  return (...args: any[]) => {
    if (called) return undefined;
    called = true
    return fn(...args);
  }
}
//Cached function OR Higher Order Function with decorator pattern
export const memoize = (fn: any) => {
  const cache = {} as any;
  return (...args: any[]) => {
    const key = JSON.stringify(args);//key are stringified arguments
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args)
    return cache[key];
  }
}
export let callCount = 0;
export const memoizedFn = memoize((a: number, b: number) => {
  callCount += 1;
  let out = a + b;
  lg('memoizedFn out: ' + out)
  return out;
})

export const curry = (fn: any) => {
  let nums = [] as number[];
  return function curried(...args: any[]) {
    nums = [...nums, ...args];//expensive operation!
    if (fn.length === nums.length) {
      const res = fn(...nums);
      lg('curried:', res)
      nums = []
      return res;
    } else {
      return curried;
    }
  }
}
export const curry2 = (fn: any) => {
  return function curried(...args: any[]) {
    if (fn.length === args.length) {
      const res = fn(...args);
      lg('curry2:', res)
      return res;
    } else {
      return (...newArgs: number[]) => curried(...args, ...newArgs)
    }
  }
}