//----------------------Student Information------------------------------//

const studentName = "Ayesha";
const studentAge = 20;
let mathMarks = 95;
let englishMarks = 85;
let computerMarks = 75;

console.log("Name:", studentName);
console.log("Age:", studentAge);


//--------------------------ARITHMETIC OPERATIONS-----------------------------//
let totalMarks = mathMarks + englishMarks + computerMarks;
console.log("TotalMarks:", totalMarks);

const averageMarks = totalMarks / 3;
console.log("AverageMarks:", averageMarks);

const highestPossibleTotalMarks = 300;
console.log("Highest Total Marks:", highestPossibleTotalMarks);

let remaingMarks = highestPossibleTotalMarks - totalMarks;
console.log("remaingingMarks:", remaingMarks);

//------------ Comparison Operators-----------------------//

console.log(" Older than 18:", studentAge > 18);

console.log(" Math Greater than 80:", mathMarks > 80);

console.log("English Equal to 100:", englishMarks === 100);

console.log("Computer Different from 50:", computerMarks !== 50);

console.log("Average greater than or equal to 50:", averageMarks >= 50);

//------------------------- Conditional Statements---------------//

if (averageMarks >= 90) {
  console.log("Grade: A");
} else if (averageMarks >= 80) {
  console.log("Grade:B");
} else if (averageMarks >= 70) {
  console.log("Grade:C");
} else if (averageMarks >= 60) {
  console.log("Grade:D");
} else if (averageMarks >= 50) {
  console.log("Grade:E");
} else {
  console.log("Grade:Fail");
}
