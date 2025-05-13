export default function Tela3GerenciarTempo({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como Gerenciar o Tempo?</Text>
      <Text>Planeje suas atividades e defina prioridades para usar o tempo de forma eficaz.</Text>
      <Button title="Vamos para a próxima!" onPress={() => navigation.navigate('MetasExercicio')} />
    </View>
  );
}
