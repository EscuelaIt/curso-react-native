
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../../styles/styles';

export default function About() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'> About</Text>
        </View>
    );
}