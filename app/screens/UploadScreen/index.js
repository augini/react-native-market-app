import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import { colors } from "../../styles/GlobalStyles";
import LottieView from "lottie-react-native";

const UploadScreen = ({ progress, visible = false, onDone }) => {
  return (
    <Modal
      visible={visible}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        ) : (
          <LottieView
            source={require("../../assets/data.json")}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
          />
        )}
      </View>
    </Modal>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
