"use strict";
// Create a function named getSignalStatus. The function receives the signal strength (0–100) and returns a status string.
Object.defineProperty(exports, "__esModule", { value: true });
const getSignalStatus = (strength) => {
    if (strength >= 0 && strength <= 20) {
        return "Weak";
    }
    else if (strength <= 50) {
        return "Fair";
    }
    else if (strength <= 80) {
        return "Good";
    }
    else if (strength <= 100) {
        return "Excellent";
    }
    return "Invalid signal strength";
};
console.log(getSignalStatus(10));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(120));
console.log(getSignalStatus(95));
//# sourceMappingURL=problem-2.js.map