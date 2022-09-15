import { useNavigation } from "@react-navigation/core";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import Header from "../../src/Component/Header";

const Seach = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Seach;

const styles = StyleSheet.create({});
