import { Text, Surface, Button } from 'react-native-paper';
import { styles } from '../styles/styles';
import { COLORS as colors } from '../styles/styles';
import { Link } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function Error() {
    return (
        <Animated.View entering={FadeIn}>
            <Surface style={styles.surface}>
                < Text style={{ color: colors.error }} variant='displaySmall'>Ha ocurrido un error inesperado!</Text >
                <Link href='/' asChild>
                    <Button
                        mode='contained'
                        style={{ marginTop: 40 }}
                        buttonColor={colors.secondary}
                        textColor={colors.dark}
                        icon='home'
                        labelStyle={{ textTransform: 'capitalize' }}
                    >
                        Volver al inicio
                    </Button>
                </Link>
            </Surface>
        </Animated.View>
    );
}