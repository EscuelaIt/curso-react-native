import { Slot } from 'expo-router';
import TabBar from '../src/components/TabBar';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
export default function MainLayout() {

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <Slot></Slot>
                <TabBar />
                <StatusBar style="auto" />
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#99ef',


    },
});