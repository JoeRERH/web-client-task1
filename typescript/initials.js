// Function to get the initials of a name
function getNameInitials(fullName) {
    var nameParts = fullName.split(" ");
    var initials = nameParts
        .map(function (part) { return part.charAt(0).toUpperCase(); })
        .join("");
    return initials;
}
// Test case
var fullName = "John Doe";
var initials = getNameInitials(fullName);
// Display results
console.log("Input: ".concat(fullName));
console.log("Output: ".concat(initials));
