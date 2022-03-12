module.exports = function toReadable (number) {
   const numberLetters = {
   1: "one",
   2: "two",
   3: "three",
   4: "four",
   5: "five",
   6: "six",
   7: "seven",
   8: "eight",
   9: "nine",
   10: "ten",
   11: "eleven",
   12: "twelve",
   13: "thirteen",
   14: "fourteen",
   15: "fifteen",
   16: "sixteen",
   17: "seventeen",
   18: "eighteen",
   19: "nineteen",
   20: "twenty",
   30: "thirty",
   40: "forty",
   50: "fifty",
   60: "sixty",
   70: "seventy",
   80: "eighty",
   90: "ninety",
   }

   if (number === 0) {
       return 'zero'
   }

  let integerPart = Math.floor(number / 100);
  let result = '';
  if (integerPart >= 1) {
      result = numberLetters[integerPart] + ' hundred';
  }
  let dozensAndOnes = number % 100;
  if (result && dozensAndOnes) {
      result += ' '
  }
  if (numberLetters[dozensAndOnes]) {
      return result + numberLetters[dozensAndOnes];   
  }
  let dozens = Math.floor(dozensAndOnes / 10)
  if (dozens) {
      result += numberLetters[dozens * 10] + ' '
  }
  let ones = dozensAndOnes % 10;
  if (ones)  {
      return result + numberLetters[ones];
  }
  return result;
}