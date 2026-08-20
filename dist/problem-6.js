"use strict";
// First create a union type Tier, then create a function named canAccessOfflineMode that receives a valid Tier and returns whether that tier can use offline mode.
Object.defineProperty(exports, "__esModule", { value: true });
const canAccessOfflineMode = (tier) => {
    if (tier === "pro" || tier === "premium") {
        return true;
    }
    ;
    return false;
};
console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
//# sourceMappingURL=problem-6.js.map