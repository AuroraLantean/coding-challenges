import { arraySum, compareTwoNumArrays, countUniqueElements, strToIntArray } from "./typescript/array";
import { extraLongFactorials } from "./typescript/factorial";
import { fizzBuzz, roundDecimal, sumFromZero } from "./typescript/math";
import { capitalize, isPalindrome, longestWord, objMaxValue, vowelCount, wordCount, wordCountEach, wordCountEach2 } from "./typescript/string";
import { lg } from "./typescript/utils";

const args = Bun.argv;
const arg1 = args[2];//, arg2 = args[3];
//lg('arguments:', args, arg1, arg2);
let inputs, out;

switch (arg1) {
  //MATH
  case '0':
    roundDecimal(Math.PI, 7)
    sumFromZero(10)
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
  case '42':
    let ar1 = [5, 6, "+", 7, "D"]
    let ar2 = [3, 6, 7, 10, "C"]
    out = compareTwoNumArrays(ar1, ar2)
    break;
  case '2':
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
    vowelCount('potatoes') //=> 1
    break;
  case '44':
    inputs = "str1,str2,str3,str4"
    wordCount(",", inputs)
    wordCount("str", inputs)
    break;
  case '45':
    inputs = 'GeeksforGeeksGGr'
    let obj = wordCountEach(inputs)
    let obj2 = wordCountEach2(inputs)
    let maxCount = objMaxValue(obj)
    break;
  case '46':
    break;
  case '47':
    break;
  case '8':
    break;
  case '9':
    break;



  default:
    lg("unknown selection")
}
process.exit();

