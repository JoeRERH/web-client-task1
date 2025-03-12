// Function to calculate difference between dates in days
function calculateDateDifference(date1: string, date2: string): number {
    const firstDate: Date = new Date(date1);
    const secondDate: Date = new Date(date2);
    
    // Calculate difference in milliseconds and convert to days
    const timeDifference: number = secondDate.getTime() - firstDate.getTime();
    const daysDifference: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysDifference;
}

// Test case
const date1: string = "2024-03-19";
const date2: string = "2024-03-21";
const difference: number = calculateDateDifference(date1, date2);

// Display results
console.log(`Input: date1 = ${date1}, date2 = ${date2}`);
console.log(`Output: ${difference}`);