import { View } from 'react-native';
import { useState, useCallback } from 'react';
import { useFocusEffect } from 'expo-router';
import { Text, ActivityIndicator } from 'react-native-paper';
import { COLORS, styles } from "../../styles/styles";
import { getScoreBoard } from '../../utils/handleScore';

export default function ScoreBoard() {
    const [scoreBoard, setScoreBoard] = useState();
    const [isLoading, setIsLoading] = useState(true);



    useFocusEffect(
        useCallback(() => {
            // Función para cargar los datos
            const loadScoreBoard = async () => {
                setIsLoading(true);
                try {
                    const data = await getScoreBoard();
                    setScoreBoard(data);
                } catch (error) {
                    console.error('Error cargando el scoreboard:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            loadScoreBoard();
            // Función de limpieza (opcional)
            return () => {
                // Cancelar cualquier petición o limpieza necesaria
            };
        }, [])
    );
    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator size={'large'} color={COLORS.secondary} />}
            <Text variant='displayMedium'>High Scores</Text>

            {scoreBoard && scoreBoard.map((score) => (
                <View key={score.timestamp} style={styles.scoreContainer}>
                    <Text variant='bodyLarge'>{score.score} points out of {score.max}</Text>
                    <Text variant='bodyLarge'>{score.timestamp}</Text>
                </View>
            ))}

            {!isLoading && scoreBoard?.length === 0 && (
                <Text variant='bodyLarge'>No scores available</Text>
            )}


        </View>
    );
}