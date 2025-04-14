import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import CharactersList from './src/components/CharactersList';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <CharactersList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
