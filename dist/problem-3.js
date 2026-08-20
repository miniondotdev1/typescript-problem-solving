"use strict";
// First define an appropriate TypeScript type or interface for the player. Then create a function named formatPlayerCard that receives a player object and returns a formatted sentence.
Object.defineProperty(exports, "__esModule", { value: true });
const formatPlayerCard = (player) => {
    return `${player.username} is a level ${player.level} player from ${player.region}`;
};
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
//# sourceMappingURL=problem-3.js.map