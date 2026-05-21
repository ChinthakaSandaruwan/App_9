import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          console.log("Log1");
          console.log("Log2");
          let data = "";

          setTimeout(() => {
            data = "Hello World";
            console.log("Log3");
          }, 3000);

          console.log("Log4");
          console.log(data);
          console.log("Log5");
        }}
      >
        <Text style={styles.btnTxt}>Button1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Button2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Button3</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: "75%",
  },
  btnTxt: {
    fontSize: 16,
    color: "white",
  },
});
