import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Mongagua from './views/Mongagua';
import PraiaGrande from './views/PraiaGrande'

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem: Itanhaem,
    Mongagua: Mongagua,
    PraiaGrande: PraiaGrande
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}