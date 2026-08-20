// Create a function named calculateRentalFee. The function should receive a vehicle type and the rental duration in minutes, and return the calculated fee.

type VehicleType = "scooter" | "ebike" | "moped";

const calculateRentalFee =(vehicle: VehicleType, minutes: number): number => {
    if(vehicle === "scooter"){
        const finalFee:number = 10 + (minutes * 2)
        return finalFee;
    }
    else if(vehicle === "ebike"){
        const finalFee: number = 15 + (minutes * 3)
        return finalFee
    }
    const finalFee = 25 + (minutes * 5)
    return finalFee;
}

console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));