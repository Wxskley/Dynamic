import { useNavigation } from "@react-navigation/core";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
  CheckBox,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../../src/Component/Header";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";

const ManterPeso = () => {
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [altura, setAltura] = useState("");
  ///sexo
  const [masculino, setMasculino] = useState(false);
  const [feminino, setFeminino] = useState(false);

  ///atividade fisica
  const [sedentario, setSedentario] = useState(false);
  const [levemente, setLevemente] = useState(false);
  const [moderar, setModerar] = useState(false);
  const [muito, setMuito] = useState(false);
  const [extre, setExtre] = useState(false);

  function Manter() {
    if (
      peso <= 19 ||
      peso === "" ||
      masculino === null ||
      feminino === null ||
      idade <= 1 ||
      idade === "" ||
      altura <= 1.0 ||
      altura === ""
    ) {
      alert("erro");
    }

    if (masculino === sedentario) {
      var rsm;
      var sedd = 1.2;
      rsm = 13.75 * peso + 5 * altura + 6.76 * idade + 66.5;
      alert(rsm * sedd);
    } else if (masculino === levemente) {
      var lad = 1.3;
      rsm = 13.75 * peso + 5 * altura + 6.76 * idade + 66.5;
      alert(rsm * lad);
    } else if (masculino === moderar) {
      var mad = 1.55;
      rsm = 13.75 * peso + 5 * altura + 6.76 * idade + 66.5;
      alert(rsm * mad);
    } else if (masculino === muito) {
      var matd = 1.725;
      rsm = 13.75 * peso + 5 * altura + 6.76 * idade + 66.5;
      alert(rsm * matd);
    } else if (masculino === extre) {
      var eatd = 1.9;
      rsm = 13.75 * peso + 5 * altura + 6.76 * idade + 66.5;
      alert(rsm * eatd);
    }

    if (feminino === sedentario) {
      var rsmu;
      var sed = 1.2;
      rsmu = 9.56 * peso + 1.85 * altura - 4.68 * idade + 665;
      alert(rsmu * sed);
    } else if (feminino === levemente) {
      var la = 1.3;
      rsmu = 9.56 * peso + 1.85 * altura - 4.68 * idade + 665;
      alert(rsmu * la);
    } else if (feminino === moderar) {
      var ma = 1.55;
      rsmu = 9.56 * peso + 1.85 * altura - 4.68 * idade + 665;
      alert(rsmu * ma);
    } else if (feminino === muito) {
      var mat = 1.725;
      rsmu = 9.56 * peso + 1.85 * altura - 4.68 * idade + 665;
      alert(rsmu * mat);
    } else if (feminino === extre) {
      var eat = 1.9;
      rsmu = 9.56 * peso + 1.85 * altura - 4.68 * idade + 665;
      alert(rsmu * eat);
    }
  }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../../assets/calcback.png")}
      >
        <View style={styles.container1}>
          <TextInput
            placeholder="   Peso(kg):"
            placeholderTextColor={"#000000"}
            value={peso}
            onChangeText={setPeso}
            style={styles.input}
          />

          <TextInput
            placeholder="   Idade:"
            placeholderTextColor={"#000000"}
            style={styles.input}
            value={idade}
            onChangeText={setIdade}
          />

          <TextInput
            style={styles.input}
            value={altura}
            onChangeText={setAltura}
            placeholder="   Altura(cm):"
            placeholderTextColor={"#000000"}
          />
          <View
            style={{
              margin: 5,
              backgroundColor: "white",
              borderRadius: 8,
              opacity: 0.8,
              flexDirection: "row",
              height: 40,
              width: "97%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 25, color: "black", fontWeight: "500" }}>
              Sexo:
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: "black",
                fontWeight: "500",
                marginLeft: 3,
              }}
            >
              Masculino
            </Text>
            <Checkbox
              style={{ marginLeft: 3, borderRadius: 5 }}
              value={masculino}
              onValueChange={setMasculino}
              color={masculino ? "#03dac6" : undefined}
            />
            <Text
              style={{
                fontSize: 25,
                color: "black",
                fontWeight: "500",
                marginLeft: 3,
              }}
            >
              Feminino
            </Text>
            <Checkbox
              style={{ marginLeft: 3, borderRadius: 5 }}
              value={feminino}
              onValueChange={setFeminino}
              color={feminino ? "#03dac6" : undefined}
            />
          </View>

          <View
            style={{
              margin: 5,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 8,
              opacity: 0.8,

              height: 180,
              width: "97%",

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "black",
                marginBottom: 8,
                marginLeft: 5,
                fontWeight: "500",
              }}
            >
              Nivel de Atividade Física:
            </Text>
            <View style={styles.atv}>
              <Checkbox
                style={styles.checkbox}
                value={sedentario}
                onValueChange={setSedentario}
                color={sedentario ? "#03dac6" : undefined}
              />
              <Text style={styles.text}>Sedentário</Text>
            </View>
            <View style={styles.atv}>
              <Checkbox
                style={styles.checkbox}
                value={levemente}
                onValueChange={setLevemente}
                color={levemente ? "#03dac6" : undefined}
              />
              <Text style={styles.text}>Levemente ativo:</Text>
            </View>

            <View style={styles.atv}>
              <Checkbox
                style={styles.checkbox}
                value={moderar}
                onValueChange={setModerar}
                color={moderar ? "#03dac6" : undefined}
              />
              <Text style={styles.text}>Moderadamente ativo:</Text>
            </View>
            <View style={styles.atv}>
              <Checkbox
                style={styles.checkbox}
                value={muito}
                onValueChange={setMuito}
                color={muito ? "#03dac6" : undefined}
              />
              <Text style={styles.text}>Muito ativo:</Text>
            </View>
            <View style={styles.atv}>
              <Checkbox
                style={styles.checkbox}
                value={extre}
                onValueChange={setExtre}
                color={extre ? "#03dac6" : undefined}
              />
              <Text style={styles.text}>Extremamente ativo:</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: "#03dac6",
              padding: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 110,
              margin: 30,
            }}
            onPress={Manter}
          >
            <Text style={{ color: "white", fontWeight: "900", fontSize: 18 }}>
              Calcular
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
    justifyContent: "center",
  },
  container1: {
    margin: 30,
    marginTop: 100,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    opacity: 0.8,
    height: 40,
    margin: 5,
  },
  atv: {
    flexDirection: "row",
    marginLeft: 10,
  },
  text: {
    fontSize: 25,
    color: "black",
    marginLeft: 5,
    fontWeight: "500",
  },
  checkbox: {
    borderRadius: 5,
  },
});
