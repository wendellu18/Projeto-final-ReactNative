import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela1Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equilíbrio e Bem-Estar dos Estudantes</Text>
      <Text>Nossos Serviços:</Text>
      <Text>- Saúde Mental</Text>
      <Text>- Gerenciamento de Tempo</Text>
      <Text>- Saúde Física</Text>
      <Button title="Saiba Mais!" onPress={() => navigation.navigate('SaudeFisica')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 }
});
