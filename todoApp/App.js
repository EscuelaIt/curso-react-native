import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainContent from './src/components/MainContent';
import { SQLiteProvider } from 'expo-sqlite';

import { initDB } from './src/database/initDB';
export default function App() {
  return (

    <PaperProvider>
      <SQLiteProvider databaseName='tasks.db' onInit={initDB}>
        <MainContent />
        <StatusBar style="auto" />
      </SQLiteProvider>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
