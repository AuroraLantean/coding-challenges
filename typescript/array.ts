/**
 * make new input arguments for easy copying and pasting into real tests
 */
const lg = console.log;
export const arraySum = (inputs: any[]) => {
  //Avoid input name collide with my variable name below by changing the input variable name!
  const arr = [] as number[];//typescript!
  const lg = console.log;

  for (let i = 0; i < inputs.length; i++) {
    let box = inputs[i];
    if (!isNaN(parseInt(box))) {
      arr.push(box)
    } else if (box === "+") {
      const sum = arr[i - 1] + arr[i - 2]
      arr.push(sum)
    } else if (box === "D") {
      arr.push(2 * arr[i - 1])
    } else if (box === "C") {
      arr.pop()
    } else {
      lg("skip invalid element")
    }
    lg('array:', arr)
  }
  const out = arr.reduce((sum, box, index) => sum + box)
  lg('out:', out)
  return out;
};

export const compareTwoNumArrays = (ar1: any[], ar2: any[]) => {
  //Avoid input name collide with my variable name below by changing the input variable name!
  const lg = console.log;

  const out = [0, 0]
  //const out = new Array(ar1.length).fill(0)
  if (ar1.length != ar2.length) {
    console.error("invalid input array length")
    return out
  }

  for (let i = 0; i < ar1.length; i++) {
    const v1 = parseInt(ar1[i]);
    const v2 = parseInt(ar2[i]);
    if (isNaN(v1) || isNaN(v2)) {
      lg("Invalid input value")
      //return out;
    } else if (v1 > v2) {
      out[0] += 1;

    } else if (v1 < v2) {
      out[1] += 1;
    }
  }
  lg('out:', out)
  return out;
}

export const makeNumArr = (num: number, value: any) => new Array(num).fill(value)//.map((_, i) => i + 1);

export const strToIntArray = (arr: string) => arr.split(" ").map(num => parseInt(num))

export const countUniqueElements = (arr: number[]) => {
  let out = new Set(arr).size;
  lg('out:', out)
  return out;
}
export const randomNumberArray = (arrayLength: number) => {
  var arr = new Array(arrayLength);
  for (var i = 0; i < arrayLength; i++) {
    arr[i] = Math.random();
  }
  let out = arr.sort()
  lg('out:', out)
  return out;
}
