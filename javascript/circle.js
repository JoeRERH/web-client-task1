// Function to calculate diameter, circumference, and area of a circle
function calculateCircleProperties(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    
    return {
        diameter,
        circumference: parseFloat(circumference.toFixed(4)),
        area: parseFloat(area.toFixed(3))
    };
}

// Test case
const radius = 5;
const circleProps = calculateCircleProperties(radius);

// Display results
console.log(`Input: radius = ${radius}`);
console.log(`Output: diameter = ${circleProps.diameter}, circumference = ${circleProps.circumference}, area = ${circleProps.area}`);