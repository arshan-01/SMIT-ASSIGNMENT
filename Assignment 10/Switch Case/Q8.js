const problem = "3 add 16";
const calculate = opr => {
   const [num1, operation, num2] = opr.split(" ");
   switch (operation) {
      case "add":
         return +num1 + +num2;
      case "divide":
         return +num1 / +num2;
      case "subtract":
         return +num1 - +num2;
      case "multiply":
         return +num1 * +num2;
      case "modulo":
         return +num1 % +num2;
      default:
         return 0;
   }
}
console.log(calculate(problem));