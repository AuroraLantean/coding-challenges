import { lg } from "./utils";

export const reverseStr = (str: string) => str.split('').reverse().join('');
export const reverseWords = (str: string) => {
  let out = str.split(' ').reverse().join(' ');
  lg('reverseWords:', out)
  return out;
}
export const isPalindrome = (str: string) => {
  let strNoSpace = str.split(' ').join();
  let strRNoSpace = str.split('').reverse().join('');
  const boo = strRNoSpace === strNoSpace;
  lg('isPalindrome:', boo)
}
export const isPalindrome2 = (str: string) => {
  //use regex to extract only characters and numbers
  let str1 = str.match(/[a-z0-9]+/ig)?.join('').toLowerCase();//ignore cases, search all string
  let str2 = str1?.split('').reverse().join('');
  const boo = str1 === str2;
  lg('isPalindrome:', boo)
}
export const sortWords = (str: string) => {
  let words = str.trim().replace(/\W/g, ' ').trim().split(/\s+/);//\W Matches any character that is not a word character from the basic Latin alphabet. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%" and "É" in "Émanuel". 
  words = words.sort((a, b) => {
    return b.length - a.length
  })
  let out = words;
  //let out = words.shift();// returns the first element or undefined if the array is empty
  lg('sortWords:', out)
  return out;
}
export const longestWords = (str: string) => {
  let words = str.trim().split(" ");
  //lg('words:', words)
  let max = ['']
  for (let word of words) {
    if (max[max.length - 1].length < word.length) {
      max = [word]
    } else if (max[max.length - 1].length === word.length) {
      max = [...max, word]
    } else {
      //ignore shorter words
    }
  }
  lg('longestWords:', max)
  return max;
}
//Title Case in a sentence
export const capitalize = (str: string) => {
  var words = str.trim().split(/\s+/g)
  let out = words.map(word => {
    return word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
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
export const charCount = (str: string) => {
  let obj: any = {};//{ [key: string]: number }
  str = str.replace(/\s+/g, '');// remove all spaces
  for (let ch of str) {
    if (!obj[ch]) obj[ch] = 1;
    else obj[ch] += 1
  }
  lg("charCount occurrence:", obj)
  return obj;
}
export const firstRecurringChar = (str: string) => {
  let charCount: any = {};//{ [key: string]: number }
  str = str.replace(/\s+/g, '');// remove all spaces
  for (let char of str) {
    if (char in charCount) return char;
    charCount[char] = 1;
  }
  return null;
}
export const charCount2 = (str: string) => {
  let obj = [...str].reduce((acc: any, x) => {
    acc[x] = acc[x] ? acc[x] + 1 : 1;
    return acc
  }, {});
  //if acc[x] is undefined, acc[x] = 1; Else acc[x] = acc[x]+1
  //var result = [...s].reduce((acc, x) => { acc[x] = acc[x] ? acc[x] + 1 : 1; return acc }, {}); 
  lg("charCount2 occurrence:", obj)
  return obj;
}
export const charCountOnEachWord = (str: string) => {
  let wordArr = str.toLowerCase().split(' ');
  let out = wordArr.map(word => {
    let chars = word.split('')
    return chars.reduce((acc: any, ch) => {
      acc[ch] = acc[ch] ? acc[ch] + 1 : 1;
      if (acc[ch] > acc.max) acc.max = acc[ch]
      return acc;
    }, { max: 1, word })
  })
  lg('charCountOnEachWord:', out)
  return out;
}
export const uniqueCharFromStr = (str: string) => {
  let dup: any = []
  let unique: any = []
  for (let char of str) {
    //chars = [...chars, char]
    if (unique.indexOf(char) === -1) {
      unique.push(char)
    } else {
      dup.push(char)
    }
  }
  lg("uniqueCharFromStr unique:", unique, ', dup:', dup)
  return { unique, dup };
}
export const isUniqueCharFromStr = (str: string) => {
  let out = new Set(str).size === str.length;
  lg('isUniqueCharFromStr:', out)
  return out;
}
export const uniqueCharFromStr2 = (str: string) => {
  let dup: any = []
  let unique = new Set();
  for (let char of str) {
    if (unique.has(char)) {
      dup.push(char)
    } else {
      unique.add(char)
    }
  }
  lg("uniqueCharFromStr2 unique:", unique, ', dup:', dup)
  return { unique, dup };
}
export const objToArrays = (obj: any) => {
  //{ [key: string]: number }
  const values = [];
  const keys = [];
  for (let key in obj) {
    values.push(obj[key]);
    keys.push(key);
  }
  lg('objToArrays. keys:', keys, ', values:', values)
  return { keys, values };
}

export const objToStr = (obj: any) => {
  let out = ''
  for (let key in obj) {
    out += obj[key] + '' + key;
  }
  lg('objToStr:', out);
  return out;
}
export const objMaxValue = (obj: any) => {
  //{ [key: string]: number }
  let maxCharCount = 0;
  let maxCountChar = '';
  for (let key in obj) {
    if (obj[key] > maxCharCount) {
      maxCharCount = obj[key]
      maxCountChar = key;//key is the char
    }// else if (obj[key] === maxCharCount) { }
  }
  let out = { char: maxCountChar, count: maxCharCount };
  lg('objMaxValue:', out);
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

//substring
export const getIndicesOf = (searchStr: string, sourceStr: string, caseSensitive = false) => {
  if (searchStr.length == 0) {
    lg('getIndicesOf empty searchStr:', [])
    return [];
  }
  let indices = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index)
  lg('getIndicesOf indices:', indices)
  return indices;
}
export const getIndicesOf2 = (searchStr: string, sourceStr: string, caseSensitive = false) => {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    lg('getIndicesOf empty searchStr:', [])
    return [];
  }
  var startIndex = 0, index, indices = [];
  if (!caseSensitive) {
    sourceStr = sourceStr.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = sourceStr.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  lg('getIndicesOf indices:', indices)
  return indices;
}
