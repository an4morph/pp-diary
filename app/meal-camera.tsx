import { CameraType, CameraView, useCameraPermissions } from 'expo-camera'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MealCamera() {
  const [facing, setFacing] = useState<CameraType>('back')
  const [permission, requestPermission] = useCameraPermissions()
  const router = useRouter()

  if (!permission) {
    // Camera permissions are still loading.
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'))
  }

  const onBack = () => {
    router.back()
  }

  const skipPhoto = () => {
    router.push('/meal-form')
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Pressable onPress={skipPhoto} style={styles.skipBtn}>
          <Text style={styles.back}>Skip</Text>
        </Pressable>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
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
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
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
