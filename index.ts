import { strArraySort, arraySum3, compareNumFromTwoArr, uniqueSet, strToIntArray, numArraySort, numArrayFindAbove, mostCommonChar, mergeObjArray2, mergeDupObjArray, removeDupObjArray, filterByObjValue1, filterByObjNumKey, numArrayFilter1, filterDupOb1Array, filterDupOb2Arrays, findRepeatedItem, uniqueOfArrays, compareTwoArr, filterByObjValues, uniqueOfArrays2, rangeSum, rangeSum2, sliceArray, flattenArray, checkTruthy } from "./typescript/array";
import { callCount, callOnlyOnce, curry, curry2, factorialsBigint, funcArray1, funcArray2, hiddenCounter, hiddenCounter2, memoize, memoizedFn, numOrFunc } from "./typescript/recursive";
import { celsiusToFahrenheit, fahrenheitToCelsius, findPattern, fizzBuzz, generateFibonacciNumUntil, isFibonacciNumber, isPrime, keplerThirdLaw, roundDecimal, smallestCommonMultiple, sumAllPrimes, sumFromZero, sumOddFibonacciNumber } from "./typescript/math";
import { capitalize, firstRecurringChar, isPalindrome, longestWords, objMaxValue, objToArrays, reverseWords, sortWords, vowelCount, vowelCount2, wordCount, charCount, charCount2, uniqueCharFromStr, uniqueCharFromStr2, charCountOnEachWord, objToStr, getIndicesOf, getIndicesOf2, missingLetter, dnaPairing, replaceByBeforeCasing, pigLatin, pigLatin2, strToSpinalCase, convertStrToHTML, translateBinaryCode, reverseStr } from "./typescript/string";
import { lg } from "./typescript/utils";
import { extendObj, Person, objThis, User, makePerson } from "./typescript/objects";

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

    lg('isPrime(2):', isPrime(2))//should be true
    lg('isPrime(8):', isPrime(8))//should be false
    lg('isPrime(11):', isPrime(11))//should be true
    lg('isPrime(121):', isPrime(121))//should be false
    lg('isPrime(127):', isPrime(127))//should be true
    sumAllPrimes(10)//17
    sumAllPrimes(977)//73156

    generateFibonacciNumUntil(10)
    isFibonacciNumber(591286729879)
    isFibonacciNumber(6557470319842)

    sumOddFibonacciNumber(1)
    sumOddFibonacciNumber(4)
    sumOddFibonacciNumber(10)
    sumOddFibonacciNumber(1000)
    sumOddFibonacciNumber(4000000)
    break;
  case '1':
    fizzBuzz()
    celsiusToFahrenheit(30)
    celsiusToFahrenheit(-40)
    fahrenheitToCelsius(86)
    fahrenheitToCelsius(-40)
    break;
  case '2':
    let oFacto = factorialsBigint(0)//1
    lg('oFacto:', oFacto)
    oFacto = factorialsBigint(5)//120
    lg('oFacto:', oFacto)
    oFacto = factorialsBigint(10)//3628800
    lg('oFacto:', oFacto)
    oFacto = factorialsBigint(25)//15511210043330985984000000n
    lg('oFacto:', oFacto)
    oFacto = factorialsBigint(45)//119622220865480194561963161495657715064383733760000000000
    lg('oFacto:', oFacto)

    numOrFunc(2.67, 3)//5.67
    numOrFunc("2", 3)//undefined
    numOrFunc(5, undefined)//undefined
    numOrFunc('hello')//undefined
    numOrFunc(5)(7)//12
    numOrFunc(2)([3])//undefined
    numOrFunc()//undefined

    let fn1 = funcArray1([(x: number) => x + 1, (x: number) => x * 2])
    let fn2 = funcArray2([(x: number) => x + 1, (x: number) => x * 2])
    lg('funcArray1: ' + fn1(4), ', funcArray2: ' + fn2(4))

    const counter = hiddenCounter(10)
    counter()
    counter()
    const counter2 = hiddenCounter2(10)
    counter2()
    counter2()

    let fn = (a: number, b: number, c: number) => (a + b + c)
    let onceFn = callOnlyOnce(fn)
    lg('onceFn:', onceFn(1, 2, 3))
    lg('onceFn:', onceFn(2, 3, 6))

    memoizedFn(2, 3)
    memoizedFn(2, 3)
    lg('callCount', callCount)

    const sum = (a: number, b: number, c: number) => a + b + c;
    const csum = curry(sum)
    csum(1)(2)(4)
    csum(1, 2)(4)
    csum(1, 2, 4)

    const csum2 = curry2(sum)
    csum2(1)(2)(4)
    csum2(1, 2)(4)
    csum2(1, 2, 4)
    break;
  case '3':
    smallestCommonMultiple([1, 5])
    smallestCommonMultiple([10, 2])
    smallestCommonMultiple([13, 1])

    keplerThirdLaw([{ name: 'sputnik', avgAlt: 35873.5553 }])
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
    arraySum3([5, 10, "+", "D", "C"])//30

    arraySum3([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])//5000000015

    rangeSum2([1, 4])
    rangeSum2([10, 5])
    break;
  case '41':
    let ar1 = [5, 6, "+", 7, "D"]
    let ar2 = [3, 6, 7, 10, "C"]
    compareNumFromTwoArr(ar1, ar2)

    ar1 = [1, 2, 3, 4, 5], ar2 = [2, 4];
    compareTwoArr(ar1, ar2)

    ar1 = [1, 2, 3, 5], ar2 = [2, 4, 5, 6]
    compareTwoArr(ar1, ar2)
    ar1 = ['john', 'joe', 'jane', 'jimmy'], ar2 = ['john', 'james', 'jane', 'joshuwa']
    compareTwoArr(ar1, ar2)

    sliceArray([3, 1, 2, 4], (n) => n >= 3)

    flattenArray([1, [2], [3, [[4]]]])
    flattenArray([[["a"]], [["b"]]])
    flattenArray([1, [], [3, [[4]]]])
    flattenArray([1, {}, [3, [[4]]]])

    break;
  case '42':
    inputs = [13, 1, 6, 1, 3, -2, 4];
    uniqueSet(inputs)
    numArraySort(inputs)
    numArrayFindAbove(inputs, 4)

    inputs = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    numArrayFilter1(inputs)

    inputs = [5, 2, 2, 1, 5]// should return 5
    findRepeatedItem(inputs)
    inputs = [6, 5, 5, 10, 10, 10]// should return 10
    findRepeatedItem(inputs)
    inputs = [3, 4, 1, 6, 10]// should return -1
    findRepeatedItem(inputs)
    uniqueOfArrays([1, 3, 2], [5, 2, 1, 4], [2, 1])
    uniqueOfArrays2([1, 3, 2], [5, 2, 1, 4], [2, 1])
    uniqueOfArrays(['alice', 'bob', 'charlie'], ['alice', 'jane', 'bob', 'john'], ['bob', 'joe'])
    uniqueOfArrays2(['alice', 'bob', 'charlie'], ['alice', 'jane', 'bob', 'john'], ['bob', 'joe'])
    break;
  case '43':
    inputs = '1 1 2 2 9 8'
    isPalindrome(inputs)
    const intArray = strToIntArray(inputs)
    uniqueSet(intArray)
    sortWords('what early   today lo00gggg')
    longestWords('short early   what today')
    longestWords('short early   what todayyyyyy')
    capitalize('hElLo wOrLd') //=> 'Hello World'
    vowelCount('potatoes') //=> 3
    vowelCount2('potatoes') //=> 3

    convertStrToHTML('Dolce & Gabbana < Pizza')
    convertStrToHTML('Sixty > twelve')
    convertStrToHTML('Stuff in "quotation marks"')
    convertStrToHTML("Schindler's List")
    convertStrToHTML("<>")

    reverseStr('hello')
    break;
  case '44':
    inputs = "str1,str2,str3,str4"
    wordCount(",", inputs)
    wordCount("str", inputs)

    reverseWords("Welcome to JavaScript in this Guide")
    break;
  case '45':
    inputs = 'GeeksforGeeksGGr'
    uniqueCharFromStr(inputs)
    uniqueCharFromStr2(inputs)
    obj = charCount(inputs)
    objToStr(obj)
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

    let indices = getIndicesOf("le", "I learned to play the Ukulele in Lebanon.");
    indices = getIndicesOf("", "I learned to play the Ukulele in Lebanon.");
    indices = getIndicesOf("action", "Abstraction is a reaction of a transaction");

    indices = getIndicesOf2("le", "I learned to play the Ukulele in Lebanon.");
    indices = getIndicesOf2("", "I learned to play the Ukulele in Lebanon.");

    break;
  case '46':
    inputs = ["Banana", "Orange", "Apple", "Mango"];
    strArraySort(inputs);
    strArraySort(inputs, true);

    inputs = ['a', 'b', 'c', 'a', 'b', 'b']
    mostCommonChar(inputs)
    break;
  case '47':
    inputs = "JavaScript is the greatest programming languageeee available";
    let out = charCountOnEachWord(inputs)
    filterByObjNumKey(out)

    missingLetter('abce')
    missingLetter('fghkl')
    missingLetter('stvwx')
    missingLetter('vwxyz')

    dnaPairing('GCG')
    dnaPairing('ACT')

    replaceByBeforeCasing('Go to the store', 'store', 'Mall')
    replaceByBeforeCasing('Go to the Store', 'Store', 'mall')

    pigLatin2('consonant')
    pigLatin2('algorithm')
    pigLatin2('schwartz')
    pigLatin2('rhythm')

    strToSpinalCase('This Is Spinal Tap')
    strToSpinalCase('thisIsSpinalTap')
    strToSpinalCase('The_Andy_Griffith_Show')
    strToSpinalCase('Teletubbies say Eh-oh')
    strToSpinalCase('AllThe-small,iThings')

    translateBinaryCode("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
    translateBinaryCode("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
    break;
  case '48':
    break;
  case '49':
    break;
  case '50':
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
  case '51':
    array = [{ id: 1, name: "john" },
    { id: 1, name: "johnny" },
    { id: 2, name: "jane" },
    { id: 2, name: "janny" },
    { id: 3, name: "max" }];
    removeDupObjArray(array)
    mergeDupObjArray(array)
    break;
  case '52':
    array = [{ title: 'iPhone 13', company: "Apple" },
    { title: 'S23 Ultra', company: "Samsung" },
    { title: 'iPhone 15 Pro Max', company: "Apple" },
    { title: 'iPhone 14 Plus', company: "Apple" },
    { title: 'Mate 60 Pro', company: "Huawei" }];
    filterByObjValue1(array, 'apple')

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

    let arr = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], target = { last: "Capulet" }
    filterByObjValues(arr, target)

    let arr2 = [{ first: "Romeo", middle: 'James', last: "Montague" }, { first: "Mercutio", middle: 'John', last: null }, { first: "Tyron", middle: 'Joe', last: "Capulet" }, { first: "Tybalt", middle: 'John', last: "Capulet" }], target2 = { last: "Capulet", middle: 'John' }
    filterByObjValues(arr2, target2)

    let arr3 = [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], target3 = { "apple": 1 }
    filterByObjValues(arr3, target3)
    break;
  case '53':
    checkTruthy([{ name: "Quincy", role: "Founder" }, { name: "Camperbot", role: "" }], "role")// truthy of "" == false
    checkTruthy([{ name: "Pikachu", number: 25 }, { name: "Togepi", number: 0 }], "number")//trythy of 0 == false

    checkTruthy([{ name: "john", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "", users: [] }], "users")// truthy of [] == true

    checkTruthy([{ id: 1, data: { url: "https", name: "john" } }, { id: null, data: {} }], "data")// truthy of {} == true
    checkTruthy([{ id: 1, data: { url: "https", name: "john" } }, { id: null, data: {} }], "id")// truthy of null == false

    break;
  case '54':
    break;
  case '55':
    break;
  case '56':
    break;
  case '57':
    break;
  case '60':
    objThis()
    extendObj()

    const bob = new (Person as any)('Bob', 'Ross')
    lg('Bob', bob)
    lg(Object.keys(Person).length)//should be 6
    lg('firstName:', bob.getFirstName())
    lg('lastName:', bob.getLastName())
    lg('fullName:', bob.getFullName())
    bob.setFirstName('Haskell')
    lg('firstName:', bob.getFirstName())
    bob.setLastName('Curry')
    lg('firstName:', bob.getLastName())
    bob.setFullName('Emily Martinez', 'de la Rosa')
    lg('firstName:', bob.getFirstName())
    lg('lastName:', bob.getLastName())
    lg('fullName:', bob.getFullName())

    const user1 = new User("John", 'Doe', 30, 'abc123', 'abudabi');
    lg('Class User:', user1.first, user1.last, user1.age)
    lg('fullname:', user1.getFullname())
    lg('private userId:', user1.getUserId())
    user1.sayHello()
    user1.setFirstName('Joe')
    lg('firstName:', user1.first)
    lg('constant1:', User.constant1)

    const person = makePerson(10)
    person.getCount()
    person.increment(7)
    person.decrement(3)
    person.getCount()
    break;
  case '61':
    break;
  case '62':
    break;

  case '70':
    break;
  case '100':
    lg(foo);//no error. value === undefined
    var foo = 1;//ONLY var declaration and function declaration will bubble up; Not for let nor const
    break;
  case '101':

    break;
  case '102':

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

