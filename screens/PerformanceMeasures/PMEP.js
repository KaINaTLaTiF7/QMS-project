import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../../components/Button/CustomButton";
import InputField from "../../components/Fields/InputField";
import Header from "../../components/Header/Header";

const PMEP = (props) => {
  const [lambda, setLambda] = useState(0);
  const [mu, setMu] = useState(0);
  const queueModel = props.route.params;

  const handleSubmit = () => {
    console.log(lambda, mu, queueModel);
  };
  return (
    <ScrollView style={styles.container}>
      <Header label={"Enter Parameters"} showLabel={true} />
      <View style={styles.dataView}>
        <View style={styles.dataInput}>
          {queueModel === "mm1" ? (
            <>
              <View style={styles.input}>
                <Text style={styles.head}>
                  Lambda (λ) or Avg Number of Arrivals
                </Text>
                <InputField
                  label={""}
                  keyboardType={"numeric"}
                  onChangeText={(text) => setLambda(text)}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.head}>Mu (µ) or Avg Service Time</Text>
                <InputField
                  label={""}
                  keyboardType={"numeric"}
                  onChangeText={(text) => setMu(text)}
                />
              </View>
            </>
          ) : (
            queueModel === "mmc" ? (
                <>
              <View style={styles.input}>
                <Text style={styles.head}>
                  Lambda (λ) or Avg Number of Arrivals
                </Text>
                <InputField
                  label={""}
                  keyboardType={"numeric"}
                  onChangeText={(text) => setLambda(text)}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.head}>Mu (µ) or Avg Service Time</Text>
                <InputField
                  label={""}
                  keyboardType={"numeric"}
                  onChangeText={(text) => setMu(text)}
                />
              </View>
            </>
            ) : null
          )}
        </View>
        <View style={styles.bottomButton}>
          <CustomButton
            label={"Simulate"}
            width={"100%"}
            onPressFunction={handleSubmit}
          />
        </View>
        <Text
          style={{
            color: "red",
            marginTop: 10,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          All the values should be numbers
        </Text>
      </View>
    </ScrollView>
  );
};

export default PMEP;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dataView: {
    marginHorizontal: 16,
  },
  input: {
    marginBottom: "15%",
  },
  head: { fontWeight: "300", color: "#666", fontSize: 16 },
});