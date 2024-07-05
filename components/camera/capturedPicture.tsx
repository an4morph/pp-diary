import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'

interface Props {
  retake: () => void
  save: () => void
  imageUrl: string
}

export const CapturedPicture = ({ retake, save, imageUrl }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrl }} style={{ flex: 1 }}>
        <Pressable onPress={retake} style={styles.backBtn}>
          <Text style={styles.back}>Retake</Text>
        </Pressable>
        <Pressable onPress={save} style={styles.skipBtn}>
          <Text style={styles.back}>Save</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  back: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  skipBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
})
