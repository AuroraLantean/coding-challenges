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

export const strArraySort = (arr: string[], isToreverse = false) => {
  let out = arr.sort()
  if (isToreverse) out = out.reverse()
  lg('strArraySort:', out)
  return out
}
export const numArraySort = (arr: number[], isToreverse = false) => {
  let out = arr.sort(function (a, b) { return a - b })
  if (isToreverse) out = out.reverse()
  lg('numArraySort:', out)
  lg("lowest:", out[0], ', highest:', out[out.length - 1])
  return out
}
export const numArrayFindAbove = (arr: number[], upperLimit: number) => {
  let out = arr.some(function (each) { return each > upperLimit })
  lg('numArrayFindAny:', out)
  return out
}

export const makeNumArr = (num: number, value: any) => new Array(num).fill(value)//.map((_, i) => i + 1);

export const strToIntArray = (arr: string) => arr.split(" ").map(num => parseInt(num))

export const countUniqueElements = (arr: number[]) => {
  let out = new Set(arr).size;
  lg('out:', out)
  return out;
}
export const mostCommonChar = (arr: string[]) => {
  const mapping = arr.reduce((acc: any, x) => {
    acc[x] = acc[x] ? acc[x] + 1 : 1;
    return acc;
  }, {})
  lg('mapping:', mapping)
  const out = Object.entries(mapping).reduce((acc: any, x: any) => (x[1] > acc[1] ? x : acc), [null, 0])[0];
  //Object.entries makes an array of arrays: Object.entries({a: 1, b: 2}) gives you [['a', 1], ['b', 2]]
  //[null, 0] are initial values of[value, count]
  lg('mostCommonChar:', out)
  return out;
}
//-------------==
type obj = {
  name: string,
  value: string | string[]
}
export const mergeObjArray2 = (array: obj[]) => {
  //{ name: string, value: string[] }[]
  const out = array.reduce((acc: any, { name, value }) => {
    acc[name] ??= { name: name, value: [] };// Nullish coalescing assignment: x ??= f() means x =	x ?? (x = f())
    if (Array.isArray(value)) // if it's array type then use concat on arrays
      acc[name].value = acc[name].value.concat(value);
    else
      acc[name].value.push(value);//value must be string => push to an array
    return acc;
  }, {});
  lg('mergeObjArray2:', out);
  return out;
}
//-------------==
type obb = {
  id: number,
  name: string
}
export const removeDupObjArray = (arr: obb[]): obb[] => {
  let out = arr.reduce((acc: obb[], x: obb) => {
    let obj = acc.find((box: obb) => box.id === x.id);
    if (obj) return acc;
    return acc.concat(x)
  }, [])
  lg('removeDupObjArray:', out)
  return out;
}
export const mergeDupObjArray = (arr: obb[]): obb[] => {
  let out = arr.reduce((acc: obb[], x: obb) => {
    let obj = acc.find((box: obb) => box.id === x.id);
    if (obj) {
      //lg('x:', x)
      return [...acc, { id: x.id, name: x.name + ' ' + obj.name }];
    }
    return acc.concat(x)
  }, [])
  lg('mergeObjArray:', out)
  return out;
}


export const uniqueSet = (arr: number[]) => {
  let out = new Set(arr);
  lg('uniqueSet:', out, ', size:', out.size)
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