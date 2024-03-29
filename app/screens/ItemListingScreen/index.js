import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import * as Yup from "yup";
import Screen from "../../screens/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPicker,
} from "../../components/forms";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import AppFormImageField from "../../components/forms/AppFormImageField";
import UploadScreen from "../UploadScreen";

import useLocation from "../../hooks/useLocation";
import listingsAPI from "../../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).max(20).label("Title"),
  price: Yup.number().required().moreThan(1).lessThan(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().nullable().label("Description"),
  images: Yup.array().min(1, "Please, select at least one image"),
});

const ItemListingScreen = () => {
  const [categories, setCategories] = useState([
    {
      label: "Furniture",
      value: 1,
      iconName: "floor-lamp",
      backgroundColor: "lightcoral",
    },
    { label: "Cars", value: 2, iconName: "car", backgroundColor: "#f4a460" },
    {
      label: "Cameras",
      value: 3,
      iconName: "camera",
      backgroundColor: "tan",
    },
    {
      label: "Games",
      value: 4,
      iconName: "cards",
      backgroundColor: "lightgreen",
    },
    {
      label: "Clothing",
      value: 5,
      iconName: "shoe-heel",
      backgroundColor: "steelblue",
    },
    {
      label: "Sports",
      value: 6,
      iconName: "basketball",
      backgroundColor: "skyblue",
    },
    {
      label: "Movies & Music",
      value: 7,
      iconName: "headphones",
      backgroundColor: "blue",
    },
    {
      label: "Books",
      value: 8,
      iconName: "library-books",
      backgroundColor: "coral",
    },
    {
      label: "Other",
      value: 9,
      iconName: "tab",
      backgroundColor: "grey",
    },
  ]);
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);

  const handleSubmit = async (values, location) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsAPI.postListing(
      { ...values, ...location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
  };

  return (
    <Screen>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => {
          setUploadVisible(false);
        }}
      />

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
              category: null,
              images: [],
            }}
            onSubmit={(values, actions) => {
              console.log(values, location);
              handleSubmit(values, location);
              actions.resetForm();
            }}
            validationSchema={validationSchema}
          >
            <AppFormImageField name="images" />
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
              PickerItemComponent={CategoryPickerItem}
              numberOfColumns={3}
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
    backgroundColor: "#ffff",
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
