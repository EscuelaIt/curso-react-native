export function getTotalPoints(data) {
    let totalPoints = data.reduce((acc, question) => {
        const difficultyPoints = {
            easy: 1,
            medium: 2,
            hard: 3,
        };
        const points = difficultyPoints[question.difficulty] || 0;
        return acc + points;
    }, 0);
    return totalPoints;
}