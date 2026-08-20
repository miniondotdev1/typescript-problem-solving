// First create a union type Tier, then create a function named canAccessOfflineMode that receives a valid Tier and returns whether that tier can use offline mode.

type Tier = "free" | "pro" | "premium"

const canAccessOfflineMode = (tier: Tier): boolean=> {
    if(tier === "pro" || tier === "premium") {
        return true;
    };
    return false
}

console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));