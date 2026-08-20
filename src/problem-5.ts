// Create a function named getPlayerStats. The function should receive a player object, calculate the average of all scores, determine the rank, and return a new object containing name, average, and rank.

interface Player {
    name: string
    scores: number[]
}

interface Result {
    name: string
    average: number
    rank: "MVP" | "Rookie"
}

const getPlayerStats = (player: Player): Result => {

    const scores: number[] = player.scores;
    const totalScore: number = scores.reduce((accu, score) => accu + score, 0)
    const averageScore = totalScore/scores.length
    
    const playerRank = averageScore >= 80 ? "MVP" : "Rookie";
    
    return {
        name: player.name,
        average: averageScore,
        rank: playerRank
    }

}

console.log(getPlayerStats({
    name: "Nova",
    scores: [90, 85, 95, 80]
}));

console.log(
  getPlayerStats({
    name: "Zex",
    scores: [60, 55, 70, 50],
  }),
);
