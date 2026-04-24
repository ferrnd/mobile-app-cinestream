import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function DetalhesScreen({ route }) {
  // 🔑 Recebendo os dados via route.params
  const { item } = route.params;

  const stars = Math.round(item.avaliacao / 2);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#111" />

      {/* Imagem hero */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.imagem }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay} />

        {/* Avaliação sobre a imagem */}
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={14} color="#FFD700" />
          <Text style={styles.ratingText}>{item.avaliacao}</Text>
        </View>
      </View>

      {/* Conteúdo */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.nome}</Text>

        {/* Chips de categoria e ano */}
        <View style={styles.chipsRow}>
          <Chip
            style={styles.chip}
            textStyle={styles.chipText}
            icon={() => <Ionicons name="pricetag-outline" size={13} color="#E50914" />}
          >
            {item.categoria}
          </Chip>
          <Chip
            style={[styles.chip, styles.chipSecondary]}
            textStyle={styles.chipText}
            icon={() => <Ionicons name="calendar-outline" size={13} color="#aaa" />}
          >
            {String(item.ano)}
          </Chip>
        </View>

        {/* Estrelas */}
        <View style={styles.starsRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Ionicons
              key={i}
              name={i < stars ? 'star' : 'star-outline'}
              size={18}
              color={i < stars ? '#FFD700' : '#444'}
              style={{ marginRight: 3 }}
            />
          ))}
          <Text style={styles.ratingLabel}>{item.avaliacao} / 10</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Descrição */}
        <Text style={styles.sectionLabel}>Sinopse</Text>
        <Text style={styles.descricao}>{item.descricao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 320,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    background: 'transparent',
    // Gradient via View trick
    borderBottomWidth: 80,
    borderBottomColor: '#0a0a0a',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    // Fallback: handled by content padding
  },
  ratingBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 4,
  },
  ratingText: {
    color: '#FFD700',
    fontWeight: '700',
    fontSize: 14,
  },
  content: {
    padding: 20,
    marginTop: -20,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 14,
    letterSpacing: -0.3,
  },
  chipsRow: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  chip: {
    backgroundColor: '#1e1e1e',
    borderColor: '#E5091433',
    borderWidth: 1,
  },
  chipSecondary: {
    borderColor: '#33333380',
  },
  chipText: {
    color: '#cccccc',
    fontSize: 12,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingLabel: {
    color: '#888',
    fontSize: 13,
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#1e1e1e',
    marginBottom: 20,
  },
  sectionLabel: {
    color: '#E50914',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  descricao: {
    color: '#aaaaaa',
    fontSize: 15,
    lineHeight: 24,
  },
});
