"use strict";
// Create a function named updateStorageUsage. It should receive the current storage used (in MB) and an action, and return the new storage usage.
Object.defineProperty(exports, "__esModule", { value: true });
const updateStorageUsage = (currentUsageMB, action) => {
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }
    return Math.max(0, currentUsageMB - action.sizeMB);
};
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
//# sourceMappingURL=problem-9.js.map