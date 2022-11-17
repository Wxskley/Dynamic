import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Video, AVPlaybackStatus } from "expo-av";
const TutoPag = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container1}>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/project-33f7a.appspot.com/o/y2meta.com-Supino%20Inclinado%20com%20Halteres%20-%20Exerc%C3%ADcio%20para%20Peito-(1080p).mp4?alt=media&token=4cc4fba9-ad3d-4e4d-bdb2-08bf066488c6",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}></View>
      </View>

      <ScrollView>
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
          </View>

          <View style={{ marginLeft: 300, marginTop: -40 }}>
            <TouchableOpacity
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            >
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
            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TutoPag;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "black",

    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    padding: 10,
    margin: 8,
    backgroundColor: "#474a51",
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

  video: {
    alignSelf: "center",
    width: 400,
    height: 200,
  },
});
