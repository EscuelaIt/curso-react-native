import { decode } from 'html-entities';
export const formatTrivia = (trivia) => {
    const formattedTrivia = trivia.map((item) => {
        const decodedCorrectAnswer = decode(item.correct_answer);
        const decodedIncorrectAnswers = item.incorrect_answers.map(answer => decode(answer));

        return {
            ...item,
            category: decode(item.category),
            question: decode(item.question),
            correct_answer: decodedCorrectAnswer,
            incorrect_answers: decodedIncorrectAnswers,
            all_answers: shuffleArray([decodedCorrectAnswer, ...decodedIncorrectAnswers])
        };

    });
    return formattedTrivia;
};

//Algoritmo Fisher-Yates
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // swap
    }
    return shuffledArray;
}