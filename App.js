import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");
export default function App() {
  return (
    <View>
      <Image
        style={styles.profilePicture}
        source={require("./assets/images/profile-picture.jpg")}
      />

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  profilePicture: {
    width,
    height: width,
  },
});
