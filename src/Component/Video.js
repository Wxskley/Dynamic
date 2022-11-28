import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

export function Video({ data, action }) {
  const navigation = useNavigation();
  return (
    <View style={styles.box}>
      <Text>hgfj</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,

    backgroundColor: "#33373a",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    flex: 1,
    flexWrap: "wrap",
  },
  containerDelete: {
    height: 50,

    width: 50,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
