import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as Yup from "yup";
import Screen from "../../screens/Screen";
import { images } from "../../styles/GlobalStyles";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(20).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values, actions) => {
              console.log(values), actions.resetForm();
            }}
            validationSchema={validationSchema}
          >
            <AppFormField
              icon="person"
              name="name"
              placeholder="Name"
              textContentType="familyName"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              icon="email"
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <SubmitButton title="Register" />
          </AppForm>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
