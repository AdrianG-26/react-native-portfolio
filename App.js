import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Switch, Text, View } from "react-native";

const skills = ["HTML", "CSS", "JavaScript", "React", "React Native", "C++"];
const projects = [
  {
    id: "1",
    name: "Web Portfolio",
    link: "https://github.com/AdrianG-26/react-portfolio.git",
  },
  {
    id: "2",
    name: "To-do App",
    link: "https://github.com/AdrianG-26/todo-app.git",
  },
  {
    id: "3",
    name: "Inventory Management System",
    link: "https://github.com/AdrianG-26/midterm-project-react.git",
  },
  {
    id: "4",
    name: "Airline Reservation System",
    link: "https://github.com/KarlSalvacion/final-project-group3-webdev.git",
  },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          justifyContent: "flex-end",
        }}
      >
        <Text
          style={[
            darkMode ? styles.darkText : styles.lightText,
            { marginRight: 10, backgroundColor: "#FFA559", padding: 5, borderRadius: 10 },
          ]}
        >
          Toggle Dark Mode
        </Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>
      <Image
        source={require("./assets/images/profile-picture.jpg")}
        style={styles.profileImage}
      />
      <Text style={[styles.name, darkMode && styles.darkText]}>
        ADRIAN LOUISE GALVEZ
      </Text>
      <Text style={[styles.bio, darkMode && styles.darkText]}>
        Computer Science student at De La Salle Lipa learning to innovate in the
        world of technology.
      </Text>
      <Text style={[styles.contact, darkMode && styles.darkText]}>
        Email: adrian_louise_galvez@dlsl.edu.ph
      </Text>
      <Text style={[styles.contact, darkMode && styles.darkText]}>
        Phone: +639761267243
      </Text>

      <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>
        Skills
      </Text>
      <FlatList
        data={skills}
        renderItem={({ item }) => (
          <Text style={[styles.item, darkMode && styles.darkText]}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>
        Projects
      </Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={[styles.projectTitle, darkMode && styles.darkText]}>
              {item.name}
            </Text>
            <Text style={[styles.projectDesc, darkMode && styles.darkText]}>
              {item.link}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#EEEEEE" },
  darkContainer: { backgroundColor: "#373A40" },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 24, fontWeight: "bold" },
  bio: { fontSize: 16, marginBottom: 10 },
  contact: { fontSize: 14, marginBottom: 5 },
  sectionTitle: { fontSize: 20, marginTop: 20, fontWeight: "bold" },
  item: { fontSize: 16, marginVertical: 5 },
  projectItem: { marginVertical: 10 },
  lightText: { color: "#373A40" },
  projectTitle: { fontSize: 18, fontWeight: "bold" },
  projectDesc: { fontSize: 14 },
  darkText: { color: "#EEEEEE" },
});
