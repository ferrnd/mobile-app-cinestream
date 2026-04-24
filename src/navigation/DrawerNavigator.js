import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function InicioScreen() {
  return <TabNavigator />;
}

function SobreScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Ionicons name="information-circle-outline" size={64} color="#E50914" />
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>
        O <Text style={{ color: '#E50914', fontWeight: 'bold' }}>Guia de Filmes e Séries</Text> foi
        criado para ajudar você a descobrir os melhores conteúdos de entretenimento de forma rápida
        e organizada.
      </Text>
      <Text style={styles.text}>
        Desenvolvido com React Native + Expo + React Native Paper.
      </Text>
      <Text style={[styles.text, { color: '#666', fontSize: 13, marginTop: 24 }]}>
        Versão 1.0.0 · 2025
      </Text>
    </View>
  );
}

function ContatoScreen() {
  return (
    <View style={styles.screen}>
      <Ionicons name="mail-outline" size={64} color="#E50914" />
      <Text style={styles.title}>Contato</Text>
      <Text style={styles.text}>Tem sugestões ou encontrou algum problema?</Text>

      <TouchableOpacity
        style={styles.contactBtn}
        onPress={() => Linking.openURL('mailto:contato@guiafilmes.app')}
      >
        <Ionicons name="mail" size={18} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.contactBtnText}>contato@guiafilmes.app</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.contactBtn, { backgroundColor: '#1a1a2e', marginTop: 12 }]}
        onPress={() => Linking.openURL('https://github.com')}
      >
        <Ionicons name="logo-github" size={18} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.contactBtnText}>GitHub do Projeto</Text>
      </TouchableOpacity>
    </View>
  );
}

function CustomDrawerContent({ navigation }) {
  const items = [
    { label: 'Início', icon: 'home-outline', screen: 'Inicio' },
    { label: 'Sobre', icon: 'information-circle-outline', screen: 'Sobre' },
    { label: 'Contato', icon: 'mail-outline', screen: 'Contato' },
  ];

  return (
    <View style={styles.drawerContainer}>
      {/* Logo area */}
      <View style={styles.drawerHeader}>
        <View style={styles.drawerLogo}>
          <Ionicons name="play-circle" size={36} color="#E50914" />
        </View>
        <Text style={styles.drawerAppName}>Guia de</Text>
        <Text style={[styles.drawerAppName, { color: '#E50914' }]}>Filmes & Séries</Text>
      </View>

      <View style={styles.drawerDivider} />

      {/* Menu items */}
      {items.map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={styles.drawerItem}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Ionicons name={item.icon} size={22} color="#cccccc" style={{ marginRight: 14 }} />
          <Text style={styles.drawerItemText}>{item.label}</Text>
        </TouchableOpacity>
      ))}

      <View style={{ flex: 1 }} />
      <Text style={styles.drawerFooter}>© 2025 GuiaFilmes</Text>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#111', width: 260 },
      }}
    >
      <Drawer.Screen name="Inicio" component={InicioScreen} />
      <Drawer.Screen name="Sobre" component={SobreScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff', title: 'Sobre' }} />
      <Drawer.Screen name="Contato" component={ContatoScreen} options={{ headerShown: true, headerStyle: { backgroundColor: '#111' }, headerTintColor: '#fff', title: 'Contato' }} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#111111',
    paddingTop: 60,
    paddingHorizontal: 0,
  },
  drawerHeader: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    alignItems: 'flex-start',
  },
  drawerLogo: {
    marginBottom: 10,
  },
  drawerAppName: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 26,
  },
  drawerDivider: {
    height: 1,
    backgroundColor: '#222',
    marginBottom: 12,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  drawerItemText: {
    color: '#cccccc',
    fontSize: 16,
    fontWeight: '500',
  },
  drawerFooter: {
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 30,
  },
  // Generic screens
  screen: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 16,
  },
  text: {
    color: '#aaa',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
  },
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E50914',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  contactBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});
