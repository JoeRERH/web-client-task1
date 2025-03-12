// Interface for circle properties
interface CircleProperties {
    diameter: number;
    circumference: number;
    area: number;
}

// Function to calculate diameter, circumference, and area of a circle
function calculateCircleProperties(radius: number): CircleProperties {
    const diameter: number = 2 * radius;
    const circumference: number = 2 * Math.PI * radius;
    const area: number = Math.PI * Math.pow(radius, 2);
    
    return {
        diameter,
        circumference: parseFloat(circumference.toFixed(4)),
        area: parseFloat(area.toFixed(3))
    };
}

// Test case
const radius: number = 5;
const circleProps: CircleProperties = calculateCircleProperties(radius);

// Display results
console.log(`Input: radius = ${radius}`);
console.log(`Output: diameter = ${circleProps.diameter}, circumference = ${circleProps.circumference}, area = ${circleProps.area}`);