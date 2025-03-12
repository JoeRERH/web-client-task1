// Function to find the third angle of a triangle
function findThirdAngle(a, b) {
    return 180 - a - b;
}
// Test case
var angleA = 80;
var angleB = 65;
var angleC = findThirdAngle(angleA, angleB);
// Display results
console.log("Input: a = ".concat(angleA, ", b = ").concat(angleB));
console.log("Output: ".concat(angleC));
