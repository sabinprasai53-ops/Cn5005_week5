
// Arrow function with no name and no arguments
const vrbname = () => {};

// Code starts here

const dateofBirth = "12/12/1980";

// Function to return student name
const getStudentName = () => {
    return "Sabin Prasai";
};

// Function to return campus name
const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variables outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateofBirth;

// Exporting function with parameters
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};
