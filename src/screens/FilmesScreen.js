import React from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import filmes from '../data/filmes.json';
import MediaCard from '../components/MediaCard';

export default function FilmesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MediaCard
            item={item}
            onPress={() => navigation.navigate('Detalhes', { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  list: {
    padding: 16,
    gap: 14,
  },
});
