import { CameraView, useCameraPermissions } from 'expo-camera'
import { useRouter } from 'expo-router'
import { useRef, useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'

export default function MealCamera() {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState<any>(null)
  const [permission, requestPermission] = useCameraPermissions()
  const router = useRouter()
  const camera = useRef<CameraView>(null)

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const onBack = () => {
    router.back()
  }

  const skipPhoto = () => {
    router.push('/meal-form')
  }

  const takePicture = async () => {
    if (!camera?.current) return
    const photo = await camera.current?.takePictureAsync()
    setPreviewVisible(true)
    setCapturedImage(photo)
  }

  return previewVisible && capturedImage ? (
    <View style={styles.container}>
      <ImageBackground source={{ uri: capturedImage?.uri }} style={{ flex: 1 }}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" ref={camera}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Pressable onPress={skipPhoto} style={styles.skipBtn}>
          <Text style={styles.back}>Skip</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={takePicture} />
        </View>
      </CameraView>
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
