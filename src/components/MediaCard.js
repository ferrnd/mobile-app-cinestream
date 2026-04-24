import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MediaCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      {/* Thumbnail */}
      <Image
        source={{ uri: item.imagem }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.nome} numberOfLines={2}>{item.nome}</Text>

        <Text style={styles.descricao} numberOfLines={2}>
          {item.descricao}
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText} numberOfLines={1}>
              {item.categoria}
            </Text>
          </View>
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color="#FFD700" />
            <Text style={styles.ratingText}>{item.avaliacao}</Text>
          </View>
        </View>
      </View>

      {/* Arrow */}
      <Ionicons name="chevron-forward" size={18} color="#444" style={styles.arrow} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#141414',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1e1e1e',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 120,
    flexShrink: 0,
  },
  info: {
    flex: 1,
    padding: 12,
    gap: 4,
  },
  nome: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  descricao: {
    color: '#777777',
    fontSize: 12,
    lineHeight: 17,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  categoryBadge: {
    backgroundColor: '#E5091422',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E5091444',
    maxWidth: 140,
  },
  categoryText: {
    color: '#E50914',
    fontSize: 11,
    fontWeight: '600',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  ratingText: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '700',
  },
  arrow: {
    paddingRight: 10,
  },
});
