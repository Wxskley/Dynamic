import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../src/Component/Header";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Button } from "react-native-paper";

const ManterPeso = () => {
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  const [sexo, setSexo] = useState("");
  function Manter() {
    if (
      peso <= 19 ||
      peso === "" ||
      sexo === "" ||
      idade <= 1 ||
      idade === "" ||
      altura <= 1.0 ||
      altura === ""
    ) {
      alert("erro");
    }

    var rsm;
    var tbmrsm;
    var rs;
    var Masculino;
    var Homem;
    if (sexo === Masculino || Homem) {
      rsm = 13.75 * peso + 5 * altura + 4.68 * idade + 66.5;
      tbmrsm = 305.25 - 163.8 + 665;
      rs = rsm + tbmrsm;
      alert(rs);
    } else {
      alert("erro na compilação");
    }

    var rsmu;
    var tbmrsmu;
    var Feminino;
    var Mulher;
    if (sexo === Feminino || Mulher) {
      rsmu = 9.56 * peso + 1.85 * altura + 4.68 * idade + 66.5;
      tbmrsmu = 305.25 - 163.8 + 665;
      alert(rsmu + tbmrsmu);
    }
  }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.container1}>
        <Text style={{ fontSize: 25, color: "black" }}>Peso atual:</Text>
        <TextInput
          value={peso}
          onChangeText={setPeso}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 25, color: "black" }}>Sexo:</Text>
        <TextInput
          value={sexo}
          onChangeText={setSexo}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 25, color: "black" }}>Idade:</Text>
        <TextInput
          value={idade}
          onChangeText={setIdade}
          style={{ borderWidth: 1 }}
        />
        <Text style={{ fontSize: 25, color: "black" }}>Altura:</Text>
        <TextInput
          value={altura}
          onChangeText={setAltura}
          style={{ borderWidth: 1 }}
        />
        <TouchableOpacity style={{ width: 80 }} onPress={Manter}>
          <Text>Calcular</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ManterPeso;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
  container1: {
    margin: 30,
  },
});
