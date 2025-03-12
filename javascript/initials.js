// Function to get the initials of a name
function getNameInitials(fullName) {
    const nameParts = fullName.split(" ");
    const initials = nameParts
        .map(part => part.charAt(0).toUpperCase())
        .join("");
    
    return initials;
}

// Test case
const fullName = "John Doe";
const initials = getNameInitials(fullName);

// Display results
console.log(`Input: ${fullName}`);
console.log(`Output: ${initials}`);