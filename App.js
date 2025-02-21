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
            darkMode ? styles.darkAccent : styles.lightAccent,
            {
              marginRight: 10,
              // backgroundColor: "#FFA559",
              padding: 5,
              borderRadius: 10,
            },
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
      <Text style={[styles.username, darkMode && styles.darkText]}>
        @AdrianG-26
      </Text>
      <Text style={[styles.bio, darkMode && styles.darkText]}>
        Computer Science student at De La Salle Lipa learning to innovate in the
        world of technology.
      </Text>
      <View
        style={[
          darkMode ? styles.darkAccent : styles.lightAccent,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: 10,
            borderRadius: 10,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <Image
            source={require("./assets/images/github.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={[styles.contact, darkMode && styles.darkText]}>
            AdrianG-26
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <Image
            source={require("./assets/images/gmail.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={[styles.contact, darkMode && styles.darkText]}>
            adrian_louise_galvez@dlsl.edu.ph
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          <Image
            source={require("./assets/images/phone.webp")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={[styles.contact, darkMode && styles.darkText]}>
            +63 976 126 7243
          </Text>
        </View>
      </View>
      <View
        style={[
          darkMode ? styles.darkAccent : styles.lightAccent,
          {
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: 10,
            borderRadius: 10,
          },
        ]}
      >
        <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>
          Skills
        </Text>

        <FlatList
          data={skills}
          renderItem={({ item }) => (
            <Text style={[styles.item, darkMode && styles.darkText]}>
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </View>
      <View
        style={[
          darkMode ? styles.darkAccent : styles.lightAccent,
          {
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: 10,
            borderRadius: 10,
          },
        ]}
      >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#EEEEEE" },
  darkContainer: { backgroundColor: "#373A40" },
  profileImage: {
    width: "50%",
    height: "null",
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  name: { fontSize: 25, fontWeight: "bold", alignSelf: "center" },
  username: { fontSize: 16, marginBottom: 10, alignSelf: "center" },
  bio: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  contact: { fontSize: 12, marginBottom: 5 },
  sectionTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    alignSelf: "center",
  },
  item: { fontSize: 14, marginVertical: 2, alignSelf: "center" },
  projectItem: { marginVertical: 3 },
  lightText: { color: "#373A40" },
  projectTitle: { fontSize: 16, fontWeight: "bold" },
  projectDesc: { fontSize: 13 },
  darkText: { color: "#EEEEEE" },
  darkAccent: { backgroundColor: "#DC5F00" },
  lightAccent: { backgroundColor: "#FFA559" },
});
