import { TouchableRipple, Text } from "react-native-paper";
import { styles } from "../styles/styles";

export default function Option({ answer, onTouch }) {
    return (
        <TouchableRipple onPress={onTouch} activeOpacity={0.7}>
            <Text style={styles.option}>{answer}</Text>
        </TouchableRipple>
    );
}
