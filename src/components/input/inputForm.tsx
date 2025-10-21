import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import styles from "./styles";

export default function InputForm({ placeholder, ...rest }: TextInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        {...rest}
      />
    </View>
  );
}