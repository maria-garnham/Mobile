// TODO: estilizar esta tela com as cores e identidade visual do seu tema
// TODO: importar useState — adicione a linha abaixo no topo:
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BotaoAcao from "../components/BotaoAcao";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: "Minecraft",
  genero: "Sandbox / Sobrevivência",
  plataforma: "Mobile / PC / Consoles",
  nota: "10/10",
  sinopse:
    "Explore mundos gerados aleatoriamente, construa coisas incríveis desde a mais simples das casas até o mais magnífico dos castelos e sobreviva contra criaturas perigosas.",
};

// TODO: adicionar { route, navigation } como parametros quando a navegacao estiver configurada
export default function DetalheScreen({ route, navigation }) {
  // Defina os parâmetros de rota, pegando todos os campos presentes no objeto JOGOS definido na HomeScreen
  const { titulo, genero, plataforma, nota, sinopse } =
    route?.params ?? jogoMock;

  // TODO: estado booleano para controlar se o jogo foi salvo na lista
  const [isSalvo, setIsSalvo] = useState(false);

  const handleSalvarJogo = () => {
    setIsSalvo((prev) => !prev);

    if (!isSalvo && route?.params) {
      navigation.navigate("Lista", { novoJogo: route.params });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <TouchableOpacity
            style={styles.backBotao}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backTexto}>← Voltar</Text>
          </TouchableOpacity>

          {/* TODO: substituir pela inicial do titulo ou outro elemento do seu tema */}
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>

          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>PLATAFORMA</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>AVALIAÇÃO</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.secaoConteudo}>{sinopse}</Text>
        </View>

        {/* TODO: use o estado isSalvo para decidir o texto e estilo dinâmico */}
        <BotaoAcao
          texto={isSalvo ? "✓ Salvo na sua Lista" : "Adicionar à minha Lista"}
          onPress={handleSalvarJogo}
          ativo={isSalvo}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214" },
  hero: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#202024",
    borderBottomWidth: 1,
    borderColor: "#29292E",
  },
  backBotao: { alignSelf: "flex-start", marginBottom: 16 },
  backTexto: { color: "#9871F5", fontSize: 16, fontWeight: "600" },
  heroBadge: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#9871F5",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  heroBadgeTexto: { fontSize: 32, color: "#FFFFFF", fontWeight: "bold" },
  heroTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 6,
  },
  heroSubtitulo: { fontSize: 14, color: "#7C7C8A", marginBottom: 20 },
  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#121214",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#29292E",
  },
  metaItem: { alignItems: "center" },
  metaLabel: {
    fontSize: 10,
    color: "#7C7C8A",
    marginBottom: 4,
    fontWeight: "bold",
  },
  metaValor: { fontSize: 14, fontWeight: "600", color: "#FFFFFF" },
  metaSeparador: { width: 1, height: 28, backgroundColor: "#29292E" },
  secao: {
    margin: 20,
    backgroundColor: "#202024",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#29292E",
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  secaoConteudo: { fontSize: 15, color: "#7C7C8A", lineHeight: 22 },
});
