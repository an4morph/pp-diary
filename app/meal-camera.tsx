import { CameraCapturedPicture, CameraView, useCameraPermissions } from 'expo-camera'
import { useRef, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import { CameraComponent } from '../components/camera/camera'
import { CapturedPicture } from '../components/camera/capturedPicture'

export default function MealCamera() {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [capturedImage, setCapturedImage] = useState<CameraCapturedPicture | null>(null)
  const [permission, requestPermission] = useCameraPermissions()
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

  const takePicture = async () => {
    if (!camera?.current) return
    const photo = await camera.current?.takePictureAsync()
    setPreviewVisible(true)
    if (photo) setCapturedImage(photo)
  }

  const retakePicture = async () => {
    setCapturedImage(null)
    setPreviewVisible(false)
  }

  const savePicture = async () => {
    if (capturedImage) MediaLibrary.saveToLibraryAsync(capturedImage.uri)
  }

  return previewVisible && capturedImage ? (
    <CapturedPicture save={savePicture} retake={retakePicture} imageUrl={capturedImage?.uri} />
  ) : (
    <CameraComponent takePicture={takePicture} cameraRef={camera} />
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
