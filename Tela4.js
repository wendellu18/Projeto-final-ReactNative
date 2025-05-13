export default function Tela4MetasExercicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metas de Exercício</Text>
      <Text>30 minutos de corrida, 10 flexões, 20 abdominais, 15 agachamentos.</Text>
      <Button title="Vou Tentar!" onPress={() => navigation.navigate('SaudeMental')} />
    </View>
  );
}
