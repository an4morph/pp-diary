import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components/button'
import { useRouter } from 'expo-router'

interface Props {}

export default function MealForm({}: Props) {
  const router = useRouter()

  const goToList = () => {
    router.navigate('/list')
  }

  return (
    <View style={styles.container}>
      <Text>there will be a form for creating a new diary entry</Text>
      <Button onPress={goToList} containerStyles={styles.saveBtn}>
        Save
      </Button>
      <Button onPress={goToList}>Cancel</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    backgroundColor: '#1a9772',
    marginBottom: 20,
  },
})
