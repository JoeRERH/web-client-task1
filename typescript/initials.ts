// Function to get the initials of a name
function getNameInitials(fullName: string): string {
    const nameParts: string[] = fullName.split(" ");
    const initials: string = nameParts
        .map(part => part.charAt(0).toUpperCase())
        .join("");
    
    return initials;
}

// Test case
const fullName: string = "John Doe";
const initials: string = getNameInitials(fullName);

// Display results
console.log(`Input: ${fullName}`);
console.log(`Output: ${initials}`);