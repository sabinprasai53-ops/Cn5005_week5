function StudentInfo(Name, StudentID, LabGrp) {
    console.log("Welcome " + Name);
    console.log("Student ID: " + StudentID);
    console.log("Lab Group Number: " + LabGrp);
}
 
// Display current date and time
const currentDateTime = new Date();
 
console.log("This is my Portfolio Task");
console.log("Program run on: " + currentDateTime.toLocaleString());
 
var StudentName = "Sabin Prasai";
var StudentID = "3118386";
var LabGroup = "19";
 
// Calling the StudentInfo function
StudentInfo(StudentName, StudentID, LabGroup);
 
// Arrow function to display favourite programming language
const FavouriteLanguage = (language) => {
    console.log("My favourite programming language is " + language);
};
 
// Calling the arrow function
FavouriteLanguage("JavaScript");
 
var LastFourDigits = StudentID.slice(-4);
 
var UniqueValue = 0;
 
for (var i = 0; i < LastFourDigits.length; i++) {
    UniqueValue += Number(LastFourDigits[i]);
}
 
console.log("Last four digits of Student ID: " + LastFourDigits);
console.log("Unique Value: " + UniqueValue);
 
console.log("Program ended");