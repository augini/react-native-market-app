import React, { useState } from "react";
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
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../../components/forms";
import AppPicker from "../../components/AppPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(20).label("Title"),
  price: Yup.number().required().moreThan(1).lessThan(10000).label("Price"),
  category: Yup.string().required().nullable().min(3).max(30).label("Category"),
  description: Yup.string().nullable().label("Description"),
});

const ItemListingScreen = () => {
  const [categories, setCategories] = useState([
    { label: "Furniture", value: 1, iconName: "floor-lamp" },
    { label: "Cars", value: 2, iconName: "car" },
    { label: "Cameras", value: 3, iconName: "camera" },
    { label: "Games", value: 4, iconName: "cards" },
    { label: "Clothing", value: 5, iconName: "shoe-heel" },
    { label: "Sports", value: 6, iconName: "basketball" },
    { label: "Movies & Music", value: 7, iconName: "headphones" },
    { label: "books", value: 8, iconName: "library-books" },
    { label: "Other", value: 9, iconName: "tab" },
  ]);
  return (
    <Screen>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <AppForm
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: "Category",
            }}
            onSubmit={(values, actions) => {
              console.log(values), actions.resetForm();
            }}
            validationSchema={validationSchema}
          >
            <AppFormField
              name="title"
              placeholder="Title"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormField
              name="price"
              placeholder="Price"
              maxLength={8}
              keyboardType="numeric"
              textContentType="oneTimeCode"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <AppFormPicker
              name="category"
              placeholder="Category"
              items={categories}
            />
            <AppFormField
              name="description"
              placeholder="Description"
              numberOfLines={3}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <SubmitButton title="Post" />
          </AppForm>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default ItemListingScreen;

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
