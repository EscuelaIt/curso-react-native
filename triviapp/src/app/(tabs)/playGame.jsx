import { View } from 'react-native';
import { ActivityIndicator, Text, Button } from 'react-native-paper';
import { styles, COLORS as colors } from "../../styles/styles";
import { useState, useRef } from 'react';
import useApi from '../../hooks/useApi';
import Question from '../../components/Question';
import Option from '../../components/Option';
import Score from '../../components/Score';
import GameOver from '../../components/GameOver';
import { getTotalPoints } from '../utils/getTotalPoints';
const difficulty = {
    "easy": 1,
    "medium": 2,
    "hard": 3
};

export default function PlayGame() {
    const { data, isLoading, error, refreshData } = useApi();
    const [index, setIndex] = useState(0);
    const score = useRef(0);
    const pointsInGame = data && getTotalPoints(data);

    const handleNextQuestion = () => {
        setIndex(index + 1);
    };
    const onTouch = (answer) => {
        if (answer === data[index].correct_answer) {
            score.current += difficulty[data[index].difficulty];
        }
        handleNextQuestion();
    };
    const onPlayAgain = () => {
        score.current = 0;
        setIndex(0);
        refreshData();
    };
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size={'large'} color={colors.primary} />
            ) :
                error ? (
                    <Error />
                ) :
                    <>
                        {index === data.length && <GameOver score={score.current} pointsInGame={pointsInGame} onPlayAgain={onPlayAgain} />}
                        {index < data.length &&

                            <>
                                <Question data={data} index={index} />
                                <View style={styles.optionsContainer}>
                                    {data[index].all_answers.map((answer, i) => (
                                        <Option key={i} answer={answer} onTouch={() => onTouch(answer)} />
                                    ))}
                                </View>
                                <Score pointsInGame={pointsInGame} score={score.current} />
                            </>
                        }

                    </>
            }
        </View>
    );
}