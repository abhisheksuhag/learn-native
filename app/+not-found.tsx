import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "The page you are trying to reach is under construction."}}/>
    <View style={styles.container}>
      <Link href="/" style={styles.button}>Go back to Home Screen!</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  button: {
    fontSize: 20,
    textDecorationColor: "underline",
    color: "#fff",
  }
});
