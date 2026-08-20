"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAgeRatingAccess = (age) => {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age <= 16) {
        return "T (Teen)";
    }
    return "M (Mature)";
};
console.log(getAgeRatingAccess(5));
//# sourceMappingURL=problem-1.js.map