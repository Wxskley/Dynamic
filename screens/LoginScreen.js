import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Platform,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableNativeFeedback,
  Keyboard,
} from "react-native";
import { auth } from "../firebase";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set } from "react-native-reanimated";
import { async } from "@firebase/util";
import { showAlert } from "../src/utils/showAler";

const LoginScreen = ({}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const navigation = useNavigation();

  async function handleSignUp() {
    if (email === "" || password === "") {
      Alert.alert("Algo deu errado", "Preencha todos os campos primeiro");
      setLoading(false);
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        return (
          setLoading(true),
          setTimeout(() => {
            setLoading(false);
          }, 1500)
        );
      })

      .catch((error) => showAlert(error.code));
  }
  async function handleLogin() {
    if (email === "" || password === "") {
      Alert.alert("Algo deu errado", "Preencha todos os campos primeiro");
      setLoading(false);
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("Login Sucesso!");
      })
      .catch((error) => showAlert(error.code));
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        return (
          setLoading(true),
          setTimeout(() => {
            setLoading(false);
            navigation.replace("Home");
          }, 1500)
        );
      }
    });

    return unsubscribe;
  }, []);
  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.background}
      >
        <ImageBackground
          source={require("../assets/Login.png")}
          style={{ width: "100%", flex: 1 }}
        >
          <ScrollView style={{ width: "100%" }} />

          <View style={styles.container1}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={"white"}
            />
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={setPassword}
              placeholder="Senha"
              placeholderTextColor={"white"}
            />
            <TouchableOpacity
              style={{ marginLeft: 180, height: 40 }}
              onPress={() => navigation.replace("ForgetPassword")}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 13,
                  fontWeight: "bold",
                  textAlign: "right",
                }}
              >
                Esqueceu sua senha?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn12} onPress={handleLogin}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                LOG IN
                <MaterialIcons name="login" size={24} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn12} onPress={handleSignUp}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                CREATE ACCOUNT
                <Ionicons name="create" size={24} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.animatin}>
            <ActivityIndicator
              size="large"
              color={"white"}
              animating={loading}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  //botoes de login e pagina home
  btn12: {
    width: "78%",
    height: 48,
    backgroundColor: "#FFA500",
    marginBottom: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    flexDirection: "row",
  },
  //inputs pagina login
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 8,
  },
  input: {
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    height: 48,
    width: "80%",
    fontSize: 17,
    color: "white",
  },
  animatin: {
    fontSize: 10000,
    fontWeight: "900",
    alignItems: "center",
  },
});
