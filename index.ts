import { strArraySort, arraySum, compareTwoNumArrays, countUniqueElements, strToIntArray, numArraySort, numArrayFindAny, mostCommonChar } from "./typescript/array";
import { extraLongFactorials } from "./typescript/factorial";
import { fizzBuzz, roundDecimal, sumFromZero } from "./typescript/math";
import { capitalize, firstRecurringChar, isPalindrome, longestWord, mergeObjArray, objMaxValue, objValueToArray, reverseWords, vowelCount, vowelCount2, wordCount, wordCountEach, wordCountEach2 } from "./typescript/string";
import { lg } from "./typescript/utils";

const args = Bun.argv;
const arg1 = args[2];//, arg2 = args[3];
lg('arguments:', args, arg1);
let inputs, out, obj, obj2, maxCount;

switch (arg1) {
  //MATH
  case '0':
    roundDecimal(Math.PI, 7)
    sumFromZero(10.345)//55
    sumFromZero(10.345, 2)
    break;
  case '1':
    fizzBuzz()
    break;
  case '2':
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
    out = arraySum(inputs)

    inputs = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]//5000000015
    out = arraySum(inputs)
    break;
  case '41':
    let ar1 = [5, 6, "+", 7, "D"]
    let ar2 = [3, 6, 7, 10, "C"]
    out = compareTwoNumArrays(ar1, ar2)
    break;
  case '42':
    out = extraLongFactorials(0)//1
    lg('out:', out)
    out = extraLongFactorials(5)//120
    lg('out:', out)
    out = extraLongFactorials(10)//3628800
    lg('out:', out)
    out = extraLongFactorials(25)//15511210043330985984000000n
    lg('out:', out)
    out = extraLongFactorials(45)//119622220865480194561963161495657715064383733760000000000
    lg('out:', out)
    break;
  case '43':
    inputs = '1 1 2 2 9 8'
    isPalindrome(inputs)
    const intArray = strToIntArray(inputs)
    countUniqueElements(intArray)
    longestWord('short loooong l0000ng') //=> 'loooong'
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
    obj = wordCountEach(inputs)
    //obj2 = wordCountEach2(inputs)
    out = objValueToArray(obj)
    maxCount = objMaxValue(obj)

    inputs = 'aBcDEfg'
    obj = wordCountEach(inputs)
    out = objValueToArray(obj)
    maxCount = objMaxValue(obj)

    inputs = 'federico'
    out = firstRecurringChar(inputs)
    lg("out: " + out)
    break;
  case '46':
    inputs = ["Banana", "Orange", "Apple", "Mango"];
    strArraySort(inputs);
    strArraySort(inputs, true);

    inputs = [40, 100, 1, 5, 25, 10];
    out = numArraySort(inputs)
    lg("lowest:", out[0], ', highest:', out[out.length - 1])
    numArraySort(inputs, true)
    numArrayFindAny(inputs, 99)

    inputs = ['a', 'b', 'c', 'a', 'b', 'b']
    mostCommonChar(inputs)
    break;
  case '47':
    var array = [{
      name: "foo1",
      value: "val1"
    }, {
      name: "foo1",
      value: ["val2", "val3"]
    }, {
      name: "foo2",
      value: "val4"
    }];
    mergeObjArray(array)
    break;
  case '48':

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

