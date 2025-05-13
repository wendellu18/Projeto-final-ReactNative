export default function Tela5SaudeMental({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saúde Mental</Text>
      <Text>Relaxe, mantenha pensamentos positivos e conheça os seus limites.</Text>
      <Button title="SIMMMM!" onPress={() => navigation.navigate('HabitosMente')} />
    </View>
  );
}
