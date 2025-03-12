// Function to calculate the area of a rectangle
function calculateRectangleArea(rectLength, rectWidth) {
    return rectLength * rectWidth;
}
// Test case
var rectLength = 5;
var rectWidth = 3;
var area = calculateRectangleArea(rectLength, rectWidth);
// Display results
console.log("Input: length = ".concat(rectLength, ", width = ").concat(rectWidth));
console.log("Output: ".concat(area));
