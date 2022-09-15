import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
const Header = () => {
  const navigation = useNavigation();

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
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
});
