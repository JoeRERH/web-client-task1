// Function to calculate difference between dates in days
function calculateDateDifference(date1, date2) {
    var firstDate = new Date(date1);
    var secondDate = new Date(date2);
    // Calculate difference in milliseconds and convert to days
    var timeDifference = secondDate.getTime() - firstDate.getTime();
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
// Test case
var date1 = "2024-03-19";
var date2 = "2024-03-21";
var difference = calculateDateDifference(date1, date2);
// Display results
console.log("Input: date1 = ".concat(date1, ", date2 = ").concat(date2));
console.log("Output: ".concat(difference));
