// Function to calculate difference between dates in days
function calculateDateDifference(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    
    // Calculate difference in milliseconds and convert to days
    const timeDifference = secondDate.getTime() - firstDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysDifference;
}

// Test case
const date1 = "2024-03-19";
const date2 = "2024-03-21";
const difference = calculateDateDifference(date1, date2);

// Display results
console.log(`Input: date1 = ${date1}, date2 = ${date2}`);
console.log(`Output: ${difference}`);