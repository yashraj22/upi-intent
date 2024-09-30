import OneUpi from "one-react-native-upi";
import { StyleSheet, TextInput, Text, View, Button, Alert } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});

export default function App() {
  const [note, setNote] = useState("");
  const [amount, setamount] = useState("");

  const config = {
    upiId: "firstminer2024@idfcbank",
    name: "First Miner",
    note: note,
    amount: amount,
  };

  const onSuccess = (success: string) => {
    console.log({ success });
    Alert.alert("Payment Success", success.message);
  };
  const onFailure = (error: string) => {
    console.log({ error });
    Alert.alert("Payment Failed", error.message);
  };
  const onNoteChange = (text: string) => {
    setNote(text);
  };
  const onAmountChange = (text: string) => {
    setamount(text);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>Click on the button below to initiate payment</Text>
      <TextInput
        placeholder="Enter Note"
        style={styles.TextInput}
        onChangeText={onNoteChange}
      ></TextInput>
      <TextInput
        placeholder="Enter Amount"
        style={styles.TextInput}
        onChangeText={onAmountChange}
      ></TextInput>
      <Button
        title="Pay now"
        onPress={() => OneUpi.initiate(config, onSuccess, onFailure)}
      />
    </View>
  );
}
