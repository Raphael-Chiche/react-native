import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import { ButtonRed, ButtonBlue } from "./components/button";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";

const tab = createBottomTabNavigator();
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
  <ButtonRed onPress="Press me" />
  <ButtonBlue onPress="Press me" /> */}

      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <View
          style={{ flex: 0.5, borderRadius: 15 }}
        >
          
            <LinearGradient
              colors={["rgba(246, 116, 162, 1)", "rgba(246, 116, 162, 0.2)"]}
              style={styles.linearGradient}
            >
              <Text style={styles.buttonText}>Sign in with Facebook</Text>
            </LinearGradient>
        </View>

        <View
          style={[
            styles.containerMiddle,
            {
              flexDirection: "row",
            },
          ]}
        >
          <View style={[styles.containerInner, { flexDirection: "column" }]}>
            <View
              style={{ flex: 2, borderRadius: 15 }}
            >
                <LinearGradient
                  colors={[
                    "rgba(246, 116, 162, 1)",
                    "rgba(246, 116, 162, 0.2)",
                  ]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient>
            </View>
            <View
              style={{ flex: 3, borderRadius: 15 }}
            >
                <LinearGradient
                  colors={[
                    "rgba(246, 116, 162, 1)",
                    "rgba(246, 116, 162, 0.2)",
                  ]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient>
            </View>
          </View>

          <View
            style={[
              styles.containerInner,
              {
                flexDirection: "column",
              },
            ]}
          >
            <View
              style={{ flex: 3, borderRadius: 15 }}
            >
                <LinearGradient
                  colors={[
                    "rgba(246, 116, 162, 1)",
                    "rgba(246, 116, 162, 0.2)",
                  ]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient>
            </View>
            <View
              style={{ flex: 2, borderRadius: 15 }}
            >
                <LinearGradient
                  colors={[
                    "rgba(246, 116, 162, 1)",
                    "rgba(246, 116, 162, 0.2)",
                  ]}
                  style={styles.linearGradient}
                >
                  <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Sondage() {
  return (
    <View>
      <Text>Sondage</Text>
    </View>
  );
}

function Projets() {
  return (
    <View>
      <Text>Projets</Text>
    </View>
  );
}

function Agenda() {
  return (
    <View>
      <Text>Agenda</Text>
    </View>
  );
}

function Profil() {
  return (
    <View>
      <Text>profil</Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <tab.Screen name="Home" component={HomeScreen} />
        <tab.Screen name="Sondage" component={Sondage} />
        <tab.Screen name="Projets" component={Projets} />
        <tab.Screen name="Agenda" component={Agenda} />
        <tab.Screen name="Profil" component={Profil} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    gap: 10,
  },
  containerMiddle: {
    flex: 1,
    gap: 10,
  },
  containerInner: {
    flex: 1,
    gap: 10,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    opacity: 0.8,
  },
});
