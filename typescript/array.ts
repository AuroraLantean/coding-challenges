/**
 * make new input arguments for easy copying and pasting into real tests
 */
const lg = console.log;

export const compareNumFromTwoArr = (ar1: any[], ar2: any[]) => {
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
  lg('compareTwoNumArrays:', out)
  return out;
}

export const strArraySort = (arr: string[], isToreverse = false) => {
  let out = arr.sort()
  if (isToreverse) out = out.reverse()
  lg('strArraySort:', out)
  return out
}
export const numArraySort = (nums: number[], isToreverse = false) => {
  let out = nums.sort((a, b) => a - b)
  let highest = out[out.length - 1];
  lg("lowest:", out[0], ', highest:', highest,)

  let subarr = out.slice(0, out.length - 1)
  let subSum = subarr.reduce((acc, x) => acc + x, 0)
  lg('subsum:', subSum, ', highest:', highest)
  /* if (isToreverse) out = out.reverse()
  lg('numArraySort:', out)*/
  return out
}
export const numArrayFindAbove = (arr: number[], upperLimit: number) => {
  let out = arr.some((each) => each > upperLimit)
  lg('numArrayFindAny:', out)
  return out
}
export const numArrayFilter1 = (nums: number[]) => {
  let out = nums.filter(x => (x % 3 === 0 || x % 2 === 0))
  lg('numArrayFilter1:', out)
  return out
}
export const numArrayFilter3 = (nums: number[]) => {
  let out = nums.reduce((acc: any, x) => {
    if (x % 3 === 0 || x % 2 === 0) {
      return [...acc, x]
    }
    return acc;
  }, 0)
  lg('numArrayFilter3:', out)
  return out
}
//-----------------== any type: seek and destroy
export const compareTwoArr = (ar1: any[], ar2: any[]) => {
  //ar2 or ...ar2 for different input structure!
  lg('compareTwoArr inputs:', ar1, ar2)
  let unique1 = ar1.filter(x => !ar2.includes(x));//Remove elements that occur in one array from another

  let unique2 = ar2.filter(x => !ar1.includes(x));
  let unique = [...unique1, ...unique2];
  let duplicate = ar1.filter(x => ar2.includes(x));
  lg('unique1:', unique1, ', unique2:', unique2, ', duplicate:', duplicate, ', unique:', unique)
  return { unique1, unique2, duplicate };
}
//-----------------== Sorted Union ;;; Rest Parameter ;;; Variadic ;;; Nested ;;;
export const uniqueOfArrays = (...args: any[]) => {
  let combined = [].concat(...args);//destruture twice
  //lg('args:', args, ', combined:', combined)
  let uniqueArr = [] as any[]
  combined.forEach(x => {
    if (!uniqueArr.includes(x)) {
      uniqueArr.push(x)
    }
  })
  /*for (let arg of args) {
    for (let n of arg) {
      if (!uniqueArr.includes(n)) {
        uniqueArr.push(n);
      }
    }
  }*/
  lg('uniqueOfArrays:', uniqueArr)
  return uniqueArr
}
export const uniqueOfArrays2 = (...args: any[]) => {
  let combined = [...new Set(args.flat())]
  lg('uniqueOfArrays2:', combined)
  return combined;
}
//-----------------==
export const arraySum3 = (inputs: any[]) => {
  //Avoid input name collide with my variable name below by changing the input variable name!
  const arr = [] as number[];//typescript!
  const lg = console.log;

  for (let i = 0; i < inputs.length; i++) {
    let box = inputs[i];
    if (!isNaN(parseInt(box))) {
      arr.push(parseInt(box))
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

//Sum of all numbers in a range
export const rangeSum = (arr: number[]) => {
  let array = Array.from({ length: Math.max(...arr) - Math.min(...arr) + 1 }, (_, index) => Math.min(...arr) + index)
  lg('rangeSum:', array)
  let sum = array.reduce((acc, x) => acc + x, 0)
  lg('rangeSum:', sum)
  return sum;
}
export const rangeSum2 = (arr: number[]) => {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  lg('rangeSum:', sum)
  return sum;
}
//-----------------==
export const makeNumArr = (num: number, value: any) => new Array(num).fill(value)//.map((_, i) => i + 1);

export const strToIntArray = (arr: string) => arr.split(" ").map(num => parseInt(num))

export const uniqueSet = (arr: number[]) => {
  let out = new Set(arr);
  lg('uniqueSet:', out, ', size:', out.size)
  return out;
}
export const findRepeatedItem = (nums: number[]) => {
  let max = 1, pos = 0, value = -1;
  let out = nums.reduce((acc: any, x, idx) => {
    acc[x] = acc[x] ? { ...acc[x], amt: acc[x]['amt'] + 1 } : { amt: 1, idx }
    let amt = acc[x].amt;
    let place = acc[x].idx;
    if (amt > max || (amt === max && place <= pos && amt > 1)) {
      max = amt;
      value = x;
      pos = place;
    }
    return acc;
  }, {})
  lg('findRepeatedItem:', out, value)
  return value;
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
//-------------== Array of Objects
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
//-------------== 
type product = {
  title: string,
  company: string
}
export const filterByObjValue1 = (arr: product[], companyName: string) => {
  let companies = arr.map(box => box.company);
  let uniqueByObjFields = [...new Set(companies)]
  lg('uniqueByObjFields', uniqueByObjFields)

  let objByField = arr.reduce((acc: any, x) => {
    if (x.company.toLowerCase() === companyName.toLowerCase()) return [...acc, x]
    return acc;
  }, []);
  lg('filterByObjValue1:', objByField)
}
///-------------== Where Art Thou
export const filterByObjValues = (arr: any[], target: any) => {
  let targetKeys = Object.keys(target);
  lg('filterByObjValues targetKeys:', targetKeys)
  let f1 = arr.filter((item: any) => targetKeys.every(key => item[key] === target[key]))
  lg('filterByObjValues:', f1)
}
//-------------==
type box = {
  title: string,
  author: string
}
export const filterDupOb1Array = (arr: box[]) => {
  const unique = arr.filter((obj, index) => {
    return index === arr.findIndex(o => obj.title === o.title);// index === foundIndex when there is only one unique match
  });
  lg('filterDupOb1Array unique:', unique)
  return unique;
}
export const filterDupOb2Arrays = (arr1: box[], arr2: box[]) => {
  let ids = new Set(arr1.map(({ title }) => title));
  let arr2unique = filterDupOb1Array(arr2)
  let out = arr2unique.filter(({ title }) => !ids.has(title));
  lg('arr2unique:', arr2unique)
  lg('filterDupOb2Arrays arr2unique-arr1unique:', out)
  return out;
}
//-------------==
type eachWord = {
  max: number,
  word: string
}
export const filterByObjNumKey = (arr: eachWord[]) => {
  lg('-------== filterByObjNumKey')
  let out = arr.reduce((acc: any, x) => {
    //lg('acc:', acc, 'x:', x)
    //{max: number, word: string}
    if (x.max > acc.max) return x;
    return acc;
  }, { max: 0, word: '' })
  lg('filterByObjNumKey:', out)
  return out;
}

//-------------==
export const randomNumberArray = (arrayLength: number) => {
  var arr = new Array(arrayLength);
  for (var i = 0; i < arrayLength; i++) {
    arr[i] = Math.random();
  }
  let out = arr.sort()
  lg('out:', out)
  return out;
}
