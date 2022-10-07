import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Seach = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Entypo name="menu" size={30} color="white" />
        <Text style>Treinos</Text>
        <Image
          source={require("../../assets/Dina.png")}
          style={{
            width: 120,
            height: 60,
            marginLeft: 140,
          }}
          resizeMode="contain"
        />
        <FontAwesome name="filter" size={30} color="white" />
      </View>
      <View></View>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Exeback.png")}
          resizeMode="contain"
          style={{ width: "100%", flex: 1, backgroundPosition: "fixed" }}
        >
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/manterP.png")}
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
                Manter Peso
              </Text>
              <TouchableOpacity
                style={styles.btn12}
                onPress={() => navigation.navigate("ManterPeso")}
              >
                <Text
                  style={{
                    color: "white",

                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Calcular
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/ganharP.png")}
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
                Ganhar Peso
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
                  Calcular
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.box}>
            <ImageBackground
              source={require("../../assets/emagre.png")}
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
                Emagrecer
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
                  Calcular
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
