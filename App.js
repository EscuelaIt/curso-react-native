import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, Platform, FlatList, ActivityIndicator } from 'react-native';

import { s } from './styles/styles.js';
import CardWoman from './components/CardWoman.jsx';


const URL = "https://67f95738094de2fe6ea13bdf.mockapi.io/api/v1/data";



export default function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async (url) => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const women = await res.json();
        setData(women);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

    };
    getData(URL);
  }, []);
  const marginAndroid = Platform.OS === "android" ? 25 : null;



  return (
    <SafeAreaView style={{ marginTop: marginAndroid }}>
      <Text style={[s.primary, s.medium]}>Women in History</Text>
      {isLoading ?
        <ActivityIndicator size="large" />
        :
        error ?
          <Text>{error}</Text>
          :
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <CardWoman woman={item} />
            }
          />
      }
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


