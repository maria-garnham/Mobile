import { StyleSheet, Text, View } from "react-native";

// Passe os parametros de forma correta e realize a estilização do componente
export default function CardJogo({ titulo, genero, plataforma, nota }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>
          {genero} • {plataforma}
        </Text>
      </View>
      <View style={styles.notaContainer}>
        <Text style={styles.notaTexto}>{nota}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202024",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#29292E",
  },
  infoContainer: { flex: 1, paddingRight: 8 },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  subtitulo: { fontSize: 13, color: "#7C7C8A" },
  notaContainer: {
    backgroundColor: "#29292E",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#9871F5",
  },
  notaTexto: { color: "#9871F5", fontWeight: "bold", fontSize: 14 },
});
