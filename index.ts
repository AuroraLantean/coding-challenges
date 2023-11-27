import { strArraySort, arraySum3, compareTwoNumArrays, uniqueSet, strToIntArray, numArraySort, numArrayFindAbove, mostCommonChar, mergeObjArray2, mergeDupObjArray, removeDupObjArray, filterByObjStrKey, filterByObjNumKey, numArrayFilter1, removeArrFromArr, filterDupOb1Array, filterDupOb2Arrays } from "./typescript/array";
import { extraLongFactorials } from "./typescript/factorial";
import { findPattern, fizzBuzz, roundDecimal, sumFromZero } from "./typescript/math";
import { capitalize, firstRecurringChar, isPalindrome, longestWords, objMaxValue, objToArrays, reverseWords, sortWords, vowelCount, vowelCount2, wordCount, charCount, charCount2, uniqueCharFromStr, uniqueCharFromStr2, charCountOnEachWord } from "./typescript/string";
import { lg } from "./typescript/utils";

const args = Bun.argv;
const arg1 = args[2];//, arg2 = args[3];
lg('arguments:', args, arg1);
let inputs, out: any, obj, obj2, maxCount, array;

switch (arg1) {
  //MATH
  case '0':
    roundDecimal(Math.PI, 7)
    sumFromZero(10.345)//55
    sumFromZero(10.345, 2)

    findPattern([2, 4, 6])
    findPattern([3, 9, 27])
    findPattern([3, 5, 14])
    break;
  case '1':
    fizzBuzz()
    break;
  case '2':
    let oFacto = extraLongFactorials(0)//1
    lg('oFacto:', oFacto)
    oFacto = extraLongFactorials(5)//120
    lg('oFacto:', oFacto)
    oFacto = extraLongFactorials(10)//3628800
    lg('oFacto:', oFacto)
    oFacto = extraLongFactorials(25)//15511210043330985984000000n
    lg('oFacto:', oFacto)
    oFacto = extraLongFactorials(45)//119622220865480194561963161495657715064383733760000000000
    lg('oFacto:', oFacto)
    break;
  case '3':
    break;
  case '12':
    break;
  case '13':
    break;
  case '14':
    break;
  case '15':
    break;
  case '16':
    break;
  case '17':
    break;

  case '40':
    //var arr = [1, [2], [3, 4, [5]]];
    inputs = [5, 10, "+", "D", "C"]//30
    arraySum3(inputs)

    inputs = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]//5000000015
    arraySum3(inputs)
    break;
  case '41':
    let ar1 = [5, 6, "+", 7, "D"]
    let ar2 = [3, 6, 7, 10, "C"]
    compareTwoNumArrays(ar1, ar2)

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 4];
    removeArrFromArr(arr1, arr2)
    break;
  case '43':
    inputs = '1 1 2 2 9 8'
    isPalindrome(inputs)
    const intArray = strToIntArray(inputs)
    uniqueSet(intArray)
    sortWords('what early   today lo00gggg')
    longestWords('short early   what today')
    longestWords('short early   what todayyyyyy')
    capitalize('hello world') //=> 'Hello World'
    vowelCount('potatoes') //=> 3
    vowelCount2('potatoes') //=> 3
    break;
  case '44':
    inputs = "str1,str2,str3,str4"
    wordCount(",", inputs)
    wordCount("str", inputs)
    break;
  case '45':
    inputs = 'GeeksforGeeksGGr'
    uniqueCharFromStr(inputs)
    uniqueCharFromStr2(inputs)
    obj = charCount(inputs)
    obj2 = charCount2(inputs)
    objToArrays(obj)
    maxCount = objMaxValue(obj)//max value is 4 so some duplicate chars are found

    inputs = 'aBcDEfg'
    uniqueCharFromStr(inputs)
    obj = charCount(inputs)
    objToArrays(obj)
    maxCount = objMaxValue(obj)//max value is 1 so all are unique

    inputs = 'federico'
    let firstRecur = firstRecurringChar(inputs)
    lg('firstRecur:', firstRecur)
    break;
  case '46':
    inputs = ["Banana", "Orange", "Apple", "Mango"];
    strArraySort(inputs);
    strArraySort(inputs, true);

    inputs = [13, 1, 6, 1, 3, -2, 4];
    uniqueSet(inputs)
    numArraySort(inputs)
    numArrayFindAbove(inputs, 4)

    inputs = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    numArrayFilter1(inputs)

    inputs = ['a', 'b', 'c', 'a', 'b', 'b']
    mostCommonChar(inputs)
    break;
  case '47':
    inputs = "JavaScript is the greatest programming languageeee available";
    let out = charCountOnEachWord(inputs)
    filterByObjNumKey(out)
    break;
  case '48':
    break;
  case '49':
    break;
  case '50':
    break;
  case '57':
    array = [{
      name: "foo1",
      value: "val1"
    }, {
      name: "foo1",
      value: ["val2", "val3"]
    }, {
      name: "foo2",
      value: "val4"
    }];
    mergeObjArray2(array)
    break;
  case '58':
    array = [{ id: 1, name: "john" },
    { id: 1, name: "johnny" },
    { id: 2, name: "jane" },
    { id: 2, name: "janny" },
    { id: 3, name: "max" }];
    removeDupObjArray(array)
    mergeDupObjArray(array)
    break;
  case '59':
    array = [{ title: 'iPhone 13', company: "Apple" },
    { title: 'S23 Ultra', company: "Samsung" },
    { title: 'iPhone 15 Pro Max', company: "Apple" },
    { title: 'iPhone 14 Plus', company: "Apple" },
    { title: 'Mate 60 Pro', company: "Huawei" }];
    filterByObjStrKey(array, 'apple')

    let books1 = [
      { title: "Rust", author: "Bjarne" },
      { title: "JavaScript", author: "James" },
      { title: "Python", author: "Guido" },
      { title: "JavaScript", author: "James" },
    ];
    filterDupOb1Array(books1)

    let books2 = [
      { title: "C++", author: "Bjarne" },
      { title: "Zig", author: "James" },
      { title: "Python", author: "Guido" },
      { title: "Zig", author: "James" },
    ];
    filterDupOb2Arrays(books1, books2)

    break;
  case '9':
    break;
  case '9':
    break;
  case '70':
    inputs = "Welcome to JavaScript in this Guide"
    reverseWords(inputs)
    break;
  case '100':
    lg(foo);//no error. value === undefined
    var foo = 1;//ONLY var declaration and function declaration will bubble up; Not for let nor const
    break;
  case '101':
    const obj3 = {
      mesg: "Hello World",
      getMesg() { const mesg = "haha"; return this.mesg },
    }
    lg(obj3.getMesg())//this inside objects will point to that object
    //const name = 'alice'
    var name = 'bob'
    class Pet {
      name: string;
      constructor(name: string) { this.name = name; }
      getName = () => this.name;//arrow functions inherit context from their parents!
      getName2 = function () { this.name; }//older functions inherit context from Global object
      getName3 = function () { return this.name; }
    }
    const cat = new Pet("Fluffy")
    lg('getName:', cat.getName())//Fluffy
    lg('getName2:', cat.getName2())//undefined
    lg('getName3:', cat.getName3())//Fluffy
    break;
  case '102':
    //Objects and arrays are passed by reference, and all other variables are passed by value!
    const basicConfig = { host: 'localhost' }
    const extendConfig = (config: any) => {
      //Make a new object via spread operator or Object.assign, then add properties to it
      return { ...config, port: 3000 }
      //return Object.assign({}, config, { port: 3000 })
      //config.port = 3000;//will mutate the passed object
      //return config;
    }
    const extendedConfig = extendConfig(basicConfig)
    lg('basicConfig', basicConfig)
    lg('extendConfig', extendedConfig)
    break;
  case '10':
    break;
  case '10':
    break;
  case '10':
    break;
  case '10':
    break;
  default:
    lg("unknown selection")
}
process.exit();

