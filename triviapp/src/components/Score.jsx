import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from "../styles/styles";

export default function Score({ pointsInGame, score }) {
    return (
        <View >
            <Text variant='bodyMedium'>Maximum Points: {pointsInGame}</Text>
            <Text variant='displaySmall'>Your score: {score}</Text>
        </View>
    );
}
