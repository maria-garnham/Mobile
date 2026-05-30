// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState e useEffect — adicione a linha abaixo no topo:
import { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CardJogo from "../components/CardJogo";

// TODO: substituir pelos jogos que voce escolheu
const jogos = [
  {
    id: "1",
    titulo: "Minecraft",
    genero: "Sandbox / Sobrevivência",
    plataforma: "Mobile / PC / Consoles",
    nota: "10/10",
    sinopse:
      "Explore mundos gerados aleatoriamente, construa coisas incríveis desde a mais simples das casas até o mais magnífico dos castelos e sobreviva contra criaturas perigosas.",
  },
  {
    id: "2",
    titulo: "Roblox",
    genero: "Plataforma / Criação",
    plataforma: "Mobile / PC / Xbox",
    nota: "9.2/10",
    sinopse:
      "O universo virtual definitivo que permite que você jogue, crie e seja qualquer coisa que possa imaginar. Junte-se a milhões de jogadores em mundos imersivos criados globalmente.",
  },
  {
    id: "3",
    titulo: "Free Fire",
    genero: "Battle Royale / Ação",
    plataforma: "Android / iOS",
    nota: "9.0/10",
    sinopse:
      "O famoso jogo de tiro de sobrevivência disponível no celular. Cada partida dura 10 minutos e coloca você em uma ilha remota onde você enfrenta 49 outros jogadores na busca por sobrevivência.",
  },
];

export default function HomeScreen({ navigation }) {
  // TODO: declarar estado para guardar o texto de busca (inicia com string vazia)
  const [busca, setBusca] = useState("");

  // TODO: declarar estado para os jogos que aparecem na lista (inicia com TODOS os jogos)
  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  // TODO: adicionar um useEffect que roda sempre que o estado de busca mudar
  useEffect(() => {
    const resultado = jogos.filter(
      (item) =>
        item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        item.genero.toLowerCase().includes(busca.toLowerCase()),
    );
    setJogosFiltrados(resultado);
  }, [busca]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Arena Gamer</Text>
        <Text style={styles.headerSubtitulo}>
          Descubra sua próxima grande jornada
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        {/* TODO: ligar o TextInput ao estado de busca (prop value e onChangeText) */}
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo por título ou gênero..."
          placeholderTextColor="#7C7C8A"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      {/* TODO: trocar o data da FlatList para usar o estado de jogos filtrados */}
      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          // TODO: adicionar navegação para a DetalheScreen passando o objeto do jogo via params
          <TouchableOpacity
            onPress={() => navigation.navigate("Detalhe", item)}
          >
            <CardJogo
              titulo={item.titulo}
              genero={item.genero}
              plataforma={item.plataforma}
              nota={item.nota}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214" },
  header: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 16 },
  headerTitulo: { fontSize: 28, fontWeight: "bold", color: "#FFFFFF" },
  headerSubtitulo: { fontSize: 14, color: "#7C7C8A", marginTop: 4 },
  buscaContainer: { paddingHorizontal: 20, paddingBottom: 16 },
  buscaInput: {
    backgroundColor: "#202024",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#29292E",
  },
  lista: { paddingHorizontal: 20, paddingBottom: 20 },
});
