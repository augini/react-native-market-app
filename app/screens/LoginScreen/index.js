import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import jwtDecode from "jwt-decode";

//custom imports
import * as Yup from "yup";
import Screen from "../../screens/Screen";
import { images } from "../../styles/GlobalStyles";
import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import authApi from "../../api/auth";
import AuthContext from "../../auth/AuthContext";
import authStorage from "../../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
  const [errorStatus, setErrorStatus] = useState("none");
  const { user, setUser } = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) setErrorStatus("flex");
    setErrorStatus("none");

    const data = jwtDecode(result.data);
    setUser(data);
    authStorage.storeToken(result.data);
  };
  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Image source={images.redLogo} style={styles.logo} />
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <Text
              style={{
                color: "red",
                alignSelf: "center",
                display: errorStatus,
              }}
            >
              Invalid email and/or username
            </Text>
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
            <SubmitButton title="Log in" />
          </AppForm>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ffff",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
