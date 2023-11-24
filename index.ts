import { arraySum, compareTwoArrays } from "./typescript/array";
import { extraLongFactorials } from "./typescript/factorial";
const lg = console.log;
let inputs, out;

const prompt = "selection: ";
process.stdout.write(prompt);
for await (const selection of console) {
  lg(`You typed: ${selection}`);
  //process.stdout.write(prompt);

  switch (selection) {
    case '0':
      inputs = [5, 10, "+", "D", "C"]//30
      out = arraySum(inputs)
      lg('out:', out)

      inputs = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]//5000000015
      out = arraySum(inputs)
      lg('out:', out)
      break;
    case '1':
      let ar1 = [5, 6, "+", 7, "D"]
      let ar2 = [3, 6, 7, 10, "C"]
      out = compareTwoArrays(ar1, ar2)
      lg('out:', out)
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
    default:
      lg("unknown selection")
  }
  process.exit();
}
