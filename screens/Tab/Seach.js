import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Seach = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#61dafb" style="hidden" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text>
            <Entypo name="menu" size={35} color="white" />
          </Text>
        </TouchableOpacity>
        <Image
          source={require("../../assets/Dina.png")}
          style={{
            width: 120,
            height: 60,
            marginLeft: 140,
          }}
          resizeMode="contain"
        />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <ImageBackground
          source={require("../../assets/Exeback.png")}
          resizeMode="contain"
          style={{ width: "100%", flex: 1, backgroundPosition: "fixed" }}
        >
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/Supino_I.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "105%",
                flex: 1,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                Treino A
              </Text>
              <TouchableOpacity
                style={styles.btn12}
                onPress={() => navigation.navigate("TranningA")}
              >
                <Text
                  style={{
                    color: "white",

                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Iniciar
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/Treino_b.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "105%",
                flex: 1,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                Treino B
              </Text>
              <TouchableOpacity
                style={styles.btn12}
                onPress={() => navigation.navigate("TranningB")}
              >
                <Text
                  style={{
                    color: "white",

                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Iniciar
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/Treino_c.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "105%",
                flex: 1,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                Treino C
              </Text>
              <TouchableOpacity
                style={styles.btn12}
                onPress={() => navigation.navigate("TranningC")}
              >
                <Text
                  style={{
                    color: "white",

                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Iniciar
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/Treino_d.png")}
              resizeMode="contain"
              style={{
                width: "100%",
                height: "105%",
                flex: 1,
                borderRadius: 10,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
              >
                Treino D
              </Text>
              <TouchableOpacity
                style={styles.btn12}
                onPress={() => navigation.navigate("TreinoExe")}
              >
                <Text
                  style={{
                    color: "white",

                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Iniciar
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Seach;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  box: {
    padding: 10,
    margin: 8,
    backgroundColor: "#000000",
    borderRadius: 15,
    height: 200,
  },
  btn12: {
    width: "35%",
    marginLeft: 10,
    backgroundColor: "#FFA500",
    marginBottom: 12,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#000000",
    marginTop: 100,
    height: 30,
  },
});
