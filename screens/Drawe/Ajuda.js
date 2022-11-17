import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  TextInputComponent,
  Alert,
} from "react-native";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import * as MailComposer from "expo-mail-composer";

export default function Ajuda() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: "right",
          marginTop: 30,
          fontWeight: "bold",
          margin: 20,
          fontSize: 18,
        }}
      >
        Abaixo você poderá ter acesso a um texto descritivo de como funciona o
        aplicativo.
      </Text>

      <Text
        style={{
          textAlign: "justify",
          marginTop: 30,
          margin: 20,
          fontSize: 20,
        }}
      >
        O aplicativo Dynamic é um guia para usuário de academia, onde o usuário
        poderá transferir o seu treino, esteja onde ele estiver, para o
        aplicativo utilizando a função de montar treino, o usuário também
        poderá, entrando na aba de exercícios, visualizar exercícios divididos
        por grupo muscular e, ao clicar no exercício, ter acesso a um vídeo
        demonstrando como é a maneira correta de se executar o mesmo. Entrando
        na aba de cronômetro, o usuário poderá usar a ferramenta para dividir
        seus blocos de tempo entre as séries ou exercícios. O usuário poderá
        também inserir suas informações no perfil e também as suas medidas
        acessando o menu - 3 barras uma em cima da outra - que fica localizado
        na parte superior esquerda da tela principal, podendo também ter acesso
        a aba sobre, ajuda e o botão logout para sair da conta que está
        conectada no aplicativo.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    fontSize: 35,
    flex: 1,
  },
});
