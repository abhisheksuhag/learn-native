import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Link href="/about" style={styles.button}>
      Go to about screen</Link>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label='Choose a photo'/>
        <Button label='Use this photo'/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: "#fff",
  },
  imageContainer:{
    flex: 1,
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
