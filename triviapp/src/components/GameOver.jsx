import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { saveScoreBoard } from '../app/utils/handleScore';

export default function GameOver({ score, pointsInGame, onPlayAgain, }) {
    const router = useRouter();
    useEffect(() => {
        saveScoreBoard(score, pointsInGame).then(() => console.log("score saved")).catch(err => console.error(err));
    });
    return Alert.alert(
        `You scored ${score} out of ${pointsInGame}`,
        "Thank you for playing!",
        [
            {
                text: "Play Again",
                onPress: onPlayAgain,
                style: "default"
            },
            {
                text: "Exit",
                onPress: () => {
                    onPlayAgain();
                    router.navigate("/(tabs)/");
                },
                style: "destructive",
            }
        ],
        { cancelable: false }
    );
}
