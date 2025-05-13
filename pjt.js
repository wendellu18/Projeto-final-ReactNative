import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tela1Inicio from './screens/Tela1Inicio';
import Tela2SaudeFisica from './screens/Tela2SaudeFisica';
import Tela3GerenciarTempo from './screens/Tela3GerenciarTempo';
import Tela4MetasExercicio from './screens/Tela4MetasExercicio';
import Tela5SaudeMental from './screens/Tela5SaudeMental';
import Tela6HabitosMente from './screens/Tela6HabitosMente';
import Tela7Parabens from './screens/Tela7Parabens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Tela1Inicio} />
        <Stack.Screen name="SaudeFisica" component={Tela2SaudeFisica} />
        <Stack.Screen name="GerenciarTempo" component={Tela3GerenciarTempo} />
        <Stack.Screen name="MetasExercicio" component={Tela4MetasExercicio} />
        <Stack.Screen name="SaudeMental" component={Tela5SaudeMental} />
        <Stack.Screen name="HabitosMente" component={Tela6HabitosMente} />
        <Stack.Screen name="Parabens" component={Tela7Parabens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}