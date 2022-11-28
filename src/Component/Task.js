import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import {
  Entypo,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

export function Task({ data, action }) {
  const navigation = useNavigation();
  const video = React.useRef(false);
  const [status, setStatus] = useState(false);

  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity
          style={styles.containerDelete}
          onPress={() => action(data.id)}
        >
          <MaterialIcons name="delete-outline" size={40} color="#33373a" />
        </TouchableOpacity>
      )}
    >
      <View style={styles.box}>
        <Text style={{ color: "white", fontWeight: "bold", marginTop: 10 }}>
          {data?.content}
        </Text>

        <View>
          <TouchableOpacity
            style={{ marginLeft: 300, marginTop: -20 }}
            onPress={() => navigation.navigate("TutoPag")}
          >
            <Text style={{ color: "white" }}>Detalhes</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: -3,
          }}
        ></View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 10,
    padding: 10,
    height: 45,
    backgroundColor: "#33373a",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

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
