// TODO: estilizar esta tela com as cores e identidade visual do seu tema

import { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
// TODO: apos criar o componente CardJogo, importe-o aqui:
import { CardJogo } from "../components";

// Jogos mockados diferentes da Home para enriquecer o catálogo do app
const jogosMock = [
  {
    id: "101",
    titulo: "Fortnite",
    genero: "Battle Royale / Construção",
    plataforma: "PC / Consoles / Mobile",
    nota: "9.5/10",
  },
  {
    id: "102",
    titulo: "GTA V",
    genero: "Ação / Mundo Aberto",
    plataforma: "PC / PS5 / Xbox",
    nota: "9.8/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  // Para receber um jogo salvo da DetalheScreen via route.params:
  useEffect(() => {
    if (route.params?.novoJogo) {
      const jogoAdicionado = route.params.novoJogo;
      setItensSalvos((prev) => {
        const jaExiste = prev.some((j) => j.id === jogoAdicionado.id);
        if (!jaExiste) {
          return [...prev, jogoAdicionado];
        }
        return prev;
      });
    }
  }, [route.params?.novoJogo]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* TODO: renomeie o titulo para o seu tema */}
        <Text style={styles.headerTitulo}>Minha Lista Gamer</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listaContainer}
        renderItem={({ item }) => (
          <CardJogo
            titulo={item.titulo}
            genero={item.genero}
            plataforma={item.plataforma}
            nota={item.nota}
          />
        )}
        ListEmptyComponent={
          <View style={styles.conteudoVazio}>
            <Text style={styles.tituloVazio}>Sua lista está vazia</Text>
            <Text style={styles.subtituloVazio}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

// TODO: ajuste as cores para o tema do seu app
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121214" },
  header: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 16 },
  headerTitulo: { fontSize: 26, fontWeight: "bold", color: "#FFFFFF" },
  listaContainer: { paddingHorizontal: 20, paddingTop: 10, paddingBottom: 20 },
  conteudoVazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  tituloVazio: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtituloVazio: { fontSize: 14, color: "#7C7C8A", textAlign: "center" },
});
