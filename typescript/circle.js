// Function to calculate diameter, circumference, and area of a circle
function calculateCircleProperties(radius) {
    var diameter = 2 * radius;
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * Math.pow(radius, 2);
    return {
        diameter: diameter,
        circumference: parseFloat(circumference.toFixed(4)),
        area: parseFloat(area.toFixed(3))
    };
}
// Test case
var radius = 5;
var circleProps = calculateCircleProperties(radius);
// Display results
console.log("Input: radius = ".concat(radius));
console.log("Output: diameter = ".concat(circleProps.diameter, ", circumference = ").concat(circleProps.circumference, ", area = ").concat(circleProps.area));
