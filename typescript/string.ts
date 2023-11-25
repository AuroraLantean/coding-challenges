import { lg } from "./utils";

export const reverseStr = (str: string) => str.split('').reverse().join('');
export const reverseWords = (str: string) => {
  let out = str.split(' ').reverse().join(' ');
  lg('reverseWords:', out)
  return out;
}
export const isPalindrome = (str: string) => {
  const boo = reverseStr(str) === str;
  lg('isPalindrome:', boo)
}
export const longestWord = (str: string) => {
  var words = str.trim().replace(/\W/g, ' ').trim().split(/\s+/);
  words = words.sort((a, b) => {
    return b.length - a.length
  })
  let out = words.shift()
  lg('out:', out)
  return out;
}

export const capitalize = (str: string) => {
  var words = str.trim().split(/\s+/g)
  let out = words.map(word => {
    return word[0].toUpperCase() + word.substring(1, word.length)
  }).join(' ');
  lg('out:', out)
  return out;
}

export const vowelCount = function (str: string) {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  lg('vowelCount:', count)
  return count;
}
export const vowelCount2 = function (str: string) {
  const vowels = ["a", "e", "i", "o", "u"]
  const count = str.toLowerCase().split('').reduce((acc, cur) => vowels.includes(cur) ? acc + 1 : acc, 0)
  lg('vowelCount2:', count)
  return count;
}
export const wordCount = (s: string, str: string) => {
  let count = str.split(s).length - 1 //Split not recommended as it is resource hungry. It allocates new instances of 'Array' for each match. Don't try it for a >100MB file via FileReader

  //let count = (str.match(/s/g) || []).length;
  //let count = (str.match(new RegExp(s, "g")) || []).length;
  lg('count:', count)
  return count;
}
export const wordCountEach = (str: string) => {
  let obj: { [key: string]: number } = {}
  str = str.replace(/\s+/g, '');// remove all spaces
  for (let ch of str) {
    if (!obj[ch]) {
      obj[ch] = 1;
    }
    else {
      obj[ch] += 1
    }
  }
  lg("wordCountEach occurrence:", obj)
  return obj;
}
export const firstRecurringChar = (str: string) => {
  var charCount: { [key: string]: number } = {};
  str = str.replace(/\s+/g, '');// remove all spaces
  for (let char of str) {
    if (char in charCount) return char;
    charCount[char] = 1;
  }
  return null;
}
export const wordCountEach2 = (str: string) => {
  let obj: { [key: string]: number } = [...str].reduce((a: { [key: string]: number }, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
  //if a[e] is undefined, a[e] = 1; Else a[e] = a[e]+1
  //var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  lg("wordCountEach2 occurrence:", obj)
  return obj;
}
export const objValueToArray = (obj: { [key: string]: number }) => {
  const values = [];
  const keys = [];
  for (let key in obj) {
    values.push(obj[key]);
    keys.push(key);
  }
  lg('objValueToArray. keys:', keys, ', values:', values)
  return { keys, values };
}

export const objMaxValue = (obj: { [key: string]: number }) => {
  let maxCharCount = 0;
  let maxCountChar = '';
  for (let char in obj) {
    if (obj[char] > maxCharCount) {
      maxCharCount = obj[char]
      maxCountChar = char;
    }// else if (obj[char] === maxCharCount) { }
  }
  let out = { char: maxCountChar, count: maxCharCount };
  lg('objMaxValue:', out);
  return out;
}

type obj = {
  name: string,
  value: string | string[]
}
export const mergeObjArray = (array: obj[]) => {
  //{ name: string, value: string[] }[]
  const out = array.reduce((acc: any, { name, value }) => {
    acc[name] ??= { name: name, value: [] };// Nullish coalescing assignment 	x ??= f() means	x ?? (x = f())
    if (Array.isArray(value)) // if it's array type then use concat on arrays
      acc[name].value = acc[name].value.concat(value);
    else
      acc[name].value.push(value);//value must be string => push to an array
    return acc;
  }, {});
  lg('mergeObjArray:', out);
  return out;
}

export const checkString = (str: string) => {
  // check if the string starts with S and ends with G
  if (str.startsWith('S') && str.endsWith('G')) {
    lg('The string starts with S and ends with G');
  }
  else if (str.startsWith('S')) {
    lg('The string starts with S but does not end with G');
  }
  else if (str.endsWith('G')) {
    lg('The string starts does not with S but end with G');
  }
  else {
    lg('The string does not start with S and does not end with G');
  }
}