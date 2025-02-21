import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const csSkills = [
  { id: 1, skill: "HTML" },
  { id: 2, skill: "CSS" },
  { id: 3, skill: "JavaScript" },
  { id: 4, skill: "React" },
  { id: 5, skill: "React Native" },
  { id: 6, skill: "C++" },
];

const veSkills = [
  { id: 7, skill: "Premiere Pro" },
  { id: 8, skill: "Photoshop" },
  { id: 9, skill: "Capcut" },
  { id: 10, skill: "Canva" },
  { id: 11, skill: "Descript" },
  { id: 12, skill: "Frame.io" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.profileView}>
        <Image
          style={styles.profilePicture}
          source={require("./assets/images/profile-picture.jpg")}
        />
        <Text style={styles.name}>Adrian Louise Galvez</Text>
        <Text style={styles.bio}>
          I am a Computer Science Student at De La Salle Lipa. I am also a
          working student who works at US Based company as a Production Manager.
        </Text>
      </View>
      <View>
        <FlatList
          data={csSkills}
          renderItem={({ item }) => (
            <Text style={styles.skillText}>{item.skill}</Text>
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFE6C7",
  },
  profileView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilePicture: {
    marginTop: 50,
    width: "80%",
    height: "undefined",
    aspectRatio: 1,
    borderRadius: 75,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif",
    marginTop: 10,
    color: "#454545",
  },
  bio: {
    fontSize: 18,
    fontFamily: "sans-serif",
    padding: 15,
    marginTop: 10,
    backgroundColor: "#FFA559",
    color: "#454545",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  skillText: {
    fontSize: 18,
    marginRight: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#FF6000",
    borderRadius: 50,
  },
});
