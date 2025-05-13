export default function Tela2SaudeFisica({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saúde Física</Text>
      <Text>Pratique exercícios regularmente e adote uma alimentação saudável.</Text>
      <Button title="Claro que Sim!" onPress={() => navigation.navigate('GerenciarTempo')} />
    </View>
  );
}
