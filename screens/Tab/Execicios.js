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
              style={{ width: 380, height: 125, marginTop: -6 }}
              resizeMode="contain"
              source={require("../../assets/tuto1.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 45,
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
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino Reto Com barra
              </Text>

              <Text
                style={{
                  color: "white",
                  marginTop: 15,
                  marginLeft: 50,
                  textAlign: "left",
                  fontSize: 15,
                }}
              >
                Supino Reto Com barra ?? um dos {"\n"} exerc??cios mais pop da
                academia,{"\n"} o levantamento de peso cl??ssico
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -80 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.box}>
            <ImageBackground
              style={{ width: 380, height: 125, marginTop: -6 }}
              resizeMode="contain"
              source={require("../../assets/tuto2.png")}
            >
              <View
                style={{
                  backgroundColor: "#FFA500",
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  marginTop: 45,
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
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 50,
                  fontWeight: "900",
                  fontSize: 20,
                }}
              >
                Supino Ch??o
              </Text>

              <Text
                style={{
                  color: "white",
                  marginTop: 15,
                  marginLeft: 50,
                  textAlign: "left",
                  fontSize: 15,
                }}
              >
                O supino ch??o recruta a musculatura {"\n"} do peitoral e
                tr??cips,com um b??nus de{"\n"} poupar seus ombros.
              </Text>
            </ImageBackground>
            <View style={{ marginLeft: 300, marginTop: -80 }}>
              <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
                <Ionicons name="play-circle" size={40} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto3.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Supino Invertido com {"\n"} halteres
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 6,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              Principal musculo recrutado sendo {"\n"}o peitoral trazendo os
              musculos {"\n"} sinergistas deltoides e tr??ceps {"\n"}(que tambem
              auxilia o movimento)
            </Text>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto4.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Supino inclinado na {"\n"} m??quina
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 8,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              supino inclinado na m??quina articulada {"\n"} ?? um exerc??cios
              composto muito {"\n"} efetivo para treinar o peitoral,{"\n"} em
              especial as fibras superiores do m??sculo
            </Text>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto5.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                5
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Crossover
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              O Crossover ?? um exerc??cio ??nico {"\n"}para peitoral e
              definitivamente vai {"\n"}acelerar seus ganhos usando
              {"\n"}corretamente.
            </Text>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto6.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                6
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Tr??cips pulley{"\n"}(tr??ceps na polia)
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 8,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A execu????o do exerc??cio tr??ceps na polia {"\n"}com corda aumenta a
              a????o do tr??ceps.{"\n"} Entre os exerc??cios mais executados para{" "}
              {"\n"}treinar o tr??ceps braquial
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -90,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto7.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                7
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Rosca francesa{"\n"}(tr??ceps na francesa)
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              ?? um otimo exerc??cio para trabalhar {"\n"} todas as cabe??as do
              tr??cips.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto8.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                8
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Tr??cips Invertido na {"\n"} polia
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              O tr??ceps Invertido ?? uma varia????o {"\n"}do tr??cips na polia. A
              diferen??a {"\n"}?? o posicionamento das m??os na barra.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto9.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                9
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Remada em p?? no smith
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A remada em p?? no smith ?? uma varia????o {"\n"} da remada em p?? que
              pode ajudar a {"\n"}desenvolver os musculos do deltoides{"\n"} e
              trap??zio.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto10.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                10
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Crucifixo Invertido na{"\n"} polia
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              supino ?? um dos exerc??cios mais {"\n"} pop da academia, o
              levantamento{"\n"} de peso cl??ssico
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto11.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                11
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Face Pull
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              Face Pull ?? um "multi" funcional e serve{"\n"} tanto como
              construtor de massa muscular,{"\n"}mas tambem um otimo execicio
              para {"\n"}fortalecer os ombros.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto12.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                12
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Barra Fixa pronada
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A barra fixa (com pegada) pronada ?? {"\n"}um execicio avan??ado que
              usa apenas {"\n"}o peso corporal
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto13.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                13
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Pull down
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 9,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              O execicio pull down com barra ?? um{"\n"} exerc??cio cl??ssico para
              treinar a {"\n"} musculatura das costas que usa {"\n"} uma barra
              uma grande amplitude{"\n"} de movimento
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto14.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                14
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Remada articulada
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 9,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A remada articulada ?? um dos execicio {"\n"}mas efetivos e simples
              de fazer,{"\n"}Principalmente para pessoas que n??o {"\n"}sentem as
              costas trabalhando{"\n"} com Execicios livres.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto15.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                15
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Rosca direta com halteres
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A rosca direta ?? um otimo exec??cio {"\n"} isolador para trabalhar
              o b??cips e {"\n"} possui in??meras varia????es.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto16.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                16
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Rosca simult??nea com {"\n"}halteres
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A rosca simult??nea ?? um ??timo execicio {"\n"}para incluir no
              treino de b??cips com{"\n"} benef??cios em termos de hipertrofia
              muscular.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -80,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto17.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                17
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Rosca concentrada
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              A rosca concentrada ?? um execicio {"\n"}lend??rio para
              bicips,durante ao{"\n"} movimemento pode trazer muitos beneficios.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto18.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                18
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Prancha lateral
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              Um execicio para o abd??men de muita {"\n"}importancia.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -50,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto19.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                19
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Abdominal invertidos
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              Tambem conhecido como Abdominal {"\n"}inverso,?? um movimento muito
              eficiente{"\n"} para treinar o abd??mens inferior.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto20.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                20
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Agachamento hack
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              o Agachamento hack ?? um execicio {"\n"}composto ,ou seja,que
              trabalha{"\n"} v??rios m??sculos de forma multi-articular.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <ImageBackground
            style={{ width: 380, height: 125, marginTop: -6 }}
            resizeMode="contain"
            source={require("../../assets/tuto21.png")}
          >
            <View
              style={{
                backgroundColor: "#FFA500",
                height: 30,
                width: 30,
                borderRadius: 50,
                marginTop: 45,
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
                21
              </Text>
            </View>
            <Text
              style={{
                color: "white",
                marginTop: -60,
                marginLeft: 50,
                fontWeight: "900",
                fontSize: 20,
              }}
            >
              Agachamento sissy
            </Text>

            <Text
              style={{
                color: "white",
                marginTop: 15,
                marginLeft: 50,
                textAlign: "left",
                fontSize: 15,
              }}
            >
              Isola os musculos do quadr??ceps{"\n"} melhor do que qualqer outro
              exerc??cio.
            </Text>
            <TouchableOpacity style={{ marginTop: -15, marginLeft: 170 }}>
              <Text
                style={{
                  color: "white",
                  marginTop: -60,
                  marginLeft: 120,
                  fontWeight: "900",
                  fontSize: 10,
                }}
              ></Text>
            </TouchableOpacity>
          </ImageBackground>
          <View style={{ marginLeft: 300, marginTop: -80 }}>
            <TouchableOpacity onPress={() => navigation.navigate("TutoPag")}>
              <Ionicons name="play-circle" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
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
