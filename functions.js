function firstLetterName(name) {
  firstLetterInName = name[0];

 output = "The name " + name + " starts with the letter " + firstLetterInName;

  alert(output);
  }

function divisibleByTwo(number) {
   if (number % 2 == 0) {
     return true;
  } else {
    return false;
  }
}

function largestNum(arr) {
  largestNumber = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

firstLetterName("John Cena");

inputNumber = 7;
isDivisibleByTwo = divisibleByTwo(inputNumber);
if (isDivisibleByTwo == true) {
  console.log(inputNumber + " is divisible by 2");
} else {
  console.log(inputNumber + " is not divisible by 2");
}

myArray = [8, 9, 1, 4, 5];
outputLargestNumber = largestNum(myArray);
console.log(
  "My array is " + myArray + " and The largest Number is " + outputLargestNumber
);

