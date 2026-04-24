import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import FilmesScreen from '../screens/FilmesScreen';
import SeriesScreen from '../screens/SeriesScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FilmesStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={stackOptions(navigation)}>
      <Stack.Screen name="FilmesList" component={FilmesScreen} options={{ title: 'Filmes' }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function SeriesStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={stackOptions(navigation)}>
      <Stack.Screen name="SeriesList" component={SeriesScreen} options={{ title: 'Séries' }} />
      <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
    </Stack.Navigator>
  );
}

function stackOptions(navigation) {
  return {
    headerStyle: { backgroundColor: '#111111' },
    headerTintColor: '#ffffff',
    headerTitleStyle: { fontWeight: '700', fontSize: 18 },
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 16 }}>
        <Ionicons name="menu" size={26} color="#ffffff" />
      </TouchableOpacity>
    ),
  };
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111111',
          borderTopColor: '#222222',
          borderTopWidth: 1,
          height: 62,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#E50914',
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarIcon: ({ color, size, focused }) => {
          const icons = {
            Filmes: focused ? 'film' : 'film-outline',
            Séries: focused ? 'tv' : 'tv-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={FilmesStack} />
      <Tab.Screen name="Séries" component={SeriesStack} />
    </Tab.Navigator>
  );
}
