import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import AppTextInput from "../../components/AppTextInput";
import AppPicker from "../../components/AppPicker";

const InputScreen = () => {
  const [isNew, setIsNew] = useState(false);
  const [categories, setCategories] = useState([
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Kitchen items", value: 3 },
  ]);
  const [selectedItem, setSelectedItem] = useState("");
  const selectItem = (val) => {
    setSelectedItem(val);
  };

  useEffect(() => {
    if (isNew) {
      alert("Switch is turned on");
    }
  }, [isNew]);

  return (
    <View>
      <AppPicker
        placeholder={selectedItem}
        icon="apps"
        items={categories}
        selectItem={selectItem}
      ></AppPicker>
      <AppTextInput icon="email" placeholder="Email" />
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({});
