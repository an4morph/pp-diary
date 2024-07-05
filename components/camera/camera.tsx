import { CameraView } from 'expo-camera'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, View } from 'react-native'
import { IconButton } from '../button/icon'
import { Images } from 'lucide-react-native'
import { RefObject } from 'react'

interface Props {
  cameraRef: RefObject<CameraView>
  takePicture: () => void
}

export const CameraComponent = ({ cameraRef, takePicture }: Props) => {
  const router = useRouter()
  const onBack = () => router.back()

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing="back" ref={cameraRef}>
        <IconButton onPress={onBack}>
          <Images size={32} color="white" />
        </IconButton>
        <View style={styles.mainPanel}>
          <Pressable style={styles.captureBtn} onPress={takePicture} />
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
  mainPanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  captureBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
  backBtnText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backBtn: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
})
