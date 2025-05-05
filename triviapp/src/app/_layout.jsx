import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
    return (
        <PaperProvider>
            <Stack screenOptions={
                {
                    headerShown: false,
                    animation: 'slide_from_right',
                    animationDuration: 300,
                }

            } />
        </PaperProvider>

    );
}