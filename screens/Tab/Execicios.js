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
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Seach = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StatusBar />
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
      <ScrollView>
        <ImageBackground
          source={require("../../assets/Exeback.png")}
          resizeMode="contain"
          style={{ width: "100%", flex: 1, backgroundPosition: "fixed" }}
        >
          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                1
              </Text>

              <Image
                style={{ width: 100 }}
                resizeMode="contain"
                source={require("../../assets/tuto1.png")}
              />
            </View>

            <View style={{ marginLeft: 300, marginTop: -40 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                2
              </Text>
            </View>
            <View style={{ marginTop: -40, marginLeft: 300 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                3
              </Text>
            </View>
            <View style={{ marginTop: -40, marginLeft: 300 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box}>
            <View
              style={{
                backgroundColor: "#387ce1",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 40,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                4
              </Text>
            </View>
            <View style={{ marginTop: -40, marginLeft: 300 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
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
    height: 130,
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
