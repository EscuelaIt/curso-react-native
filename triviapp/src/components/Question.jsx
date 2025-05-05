import { COLORS as colors, styles } from "../styles/styles";
import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Question({ data, index }) {
    return (
        <View style={styles.questionContainer}>
            <Text variant='titleMedium'
                style={
                    { color: index < data.length - 1 ? colors.secondary : colors.error }
                }>{index < data.length - 1 ? `Question ${index + 1} / ${(data.length)}` : "Last question!"}</Text>
            <Text variant='titleSmall' style={{ color: colors.secondary }}>{data[index].category}</Text>
            <Text variant='titleLarge'>{data[index].question}</Text>
        </View>
    );
}
