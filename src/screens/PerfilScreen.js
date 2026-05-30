// TODO: escolher um tema e personalizar os dados e estilizacao desta tela
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Meu Perfil Gamer</Text>
      </View>

      <View style={styles.cartao}>
        {/* TODO: personalizar o avatar com a inicial do nome do usuario */}
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>G</Text>
        </View>
        {/* TODO: personalizar nome e e-mail */}
        <Text style={styles.nome}>Gamer Pro</Text>
        <Text style={styles.email}>gamerpro@arena.com</Text>

        <View style={styles.separador} />

        {/* TODO: substituir pelas estatisticas que fazem sentido no seu tema */}
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Mundo no Minecraft</Text>
          <Text style={styles.infoValor}>Hardcore (365 dias)</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Patente no Free Fire</Text>
          <Text style={styles.infoValor}>Mestre 🏆</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Badges no Roblox</Text>
          <Text style={styles.infoValor}>42 Conquistas</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio de 2026</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
  },
  header: {
    backgroundColor: "#202024",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#29292E",
  },
  headerTitulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cartao: {
    margin: 16,
    backgroundColor: "#202024",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#29292E",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: "#9871F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#29292E",
    marginBottom: 16,
  },
  avatarTexto: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#7C7C8A",
    marginBottom: 20,
  },
  separador: {
    width: "100%",
    height: 1,
    backgroundColor: "#29292E",
    marginBottom: 20,
  },
  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: "#7C7C8A",
  },
  infoValor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9871F5",
  },
});
