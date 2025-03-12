// Function to calculate the area of a rectangle
function calculateRectangleArea(rectLength: number, rectWidth: number): number {
    return rectLength * rectWidth;
}

// Test case
const rectLength: number = 5;
const rectWidth: number = 3;
const area: number = calculateRectangleArea(rectLength, rectWidth);

// Display results
console.log(`Input: length = ${rectLength}, width = ${rectWidth}`);
console.log(`Output: ${area}`);