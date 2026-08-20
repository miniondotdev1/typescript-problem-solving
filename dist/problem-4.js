"use strict";
// Create a function named calculateTotalListeningTime. The function should receive an array of tracks and return the total minutes listened.
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotalListeningTime = (tracks) => {
    if (tracks.length === 0)
        "Invalid";
    const result = tracks.reduce((accu, items) => accu + items.minutes, 0);
    return result;
};
const tracks = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 },
];
console.log(calculateTotalListeningTime(tracks));
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 },
];
console.log(calculateTotalListeningTime(tracks2));
//# sourceMappingURL=problem-4.js.map