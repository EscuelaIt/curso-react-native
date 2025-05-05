
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../../styles/styles';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'> Home</Text>
        </View>
    );
}