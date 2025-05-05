import AsyncStorage from "@react-native-async-storage/async-storage";

export const getScoreBoard = async () => {
    try {
        const jsonScoreBoard = await AsyncStorage.getItem('trivia-score');
        return jsonScoreBoard != null ? JSON.parse(jsonScoreBoard) : null;
    } catch (err) {
        console.error(err);
    }
};

export const saveScoreBoard = async (score, totalPoints) => {
    if (score < 1) return;
    try {
        const newScore = {
            score: score,
            max: totalPoints,
            timestamp: Intl.DateTimeFormat('en-US', {
                "hour12": false,
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
            }).format(new Date())
        };
        let scoreBoard = await getScoreBoard();
        if (scoreBoard) {
            scoreBoard.push(newScore);
            scoreBoard.sort((a, b) => b.score - a.score);
            scoreBoard.splice(5);
        } else {
            scoreBoard = [newScore];
        }
        const jsonScoreBoard = JSON.stringify(scoreBoard);
        await AsyncStorage.setItem("trivia-score", jsonScoreBoard);


    } catch (error) {

    }
};