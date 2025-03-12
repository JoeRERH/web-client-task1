// Function to find the third angle of a triangle
function findThirdAngle(a: number, b: number): number {
    return 180 - a - b;
}

// Test case
const angleA: number = 80;
const angleB: number = 65;
const angleC: number = findThirdAngle(angleA, angleB);

// Display results
console.log(`Input: a = ${angleA}, b = ${angleB}`);
console.log(`Output: ${angleC}`);