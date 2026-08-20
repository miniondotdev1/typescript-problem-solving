"use strict";
// Create a function named calculateRentalFee. The function should receive a vehicle type and the rental duration in minutes, and return the calculated fee.
Object.defineProperty(exports, "__esModule", { value: true });
const calculateRentalFee = (vehicle, minutes) => {
    if (vehicle === "scooter") {
        const finalFee = 10 + (minutes * 2);
        return finalFee;
    }
    else if (vehicle === "ebike") {
        const finalFee = 15 + (minutes * 3);
        return finalFee;
    }
    const finalFee = 25 + (minutes * 5);
    return finalFee;
};
console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));
//# sourceMappingURL=problem-10.js.map