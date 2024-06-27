import { useRouter } from 'expo-router'
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native'

interface Props {}

export default function List({}: Props) {
  const router = useRouter()

  const onAddMeal = () => {
    router.push('/meal-camera')
  }

  return (
    <View>
      <ScrollView>
        <Text>List</Text>
        <Text style={styles.randomText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis dolores beatae provident non omnis
          mollitia. Eaque consequuntur voluptates, eligendi quidem, aliquid, necessitatibus ipsam ex temporibus facilis
          libero unde esse. Earum facere repellat labore optio, expedita repudiandae dolores tempora modi illum! Minus
          totam fugiat a fugit iste veniam. Quae mollitia cumque dicta, doloribus aspernatur esse quos reprehenderit hic
          fugiat ex eligendi nesciunt doloremque voluptate dolore officiis molestias delectus praesentium magni. Quaerat
          minima nesciunt quis at cupiditate excepturi voluptatum hic ullam? Incidunt, ipsam nostrum! Aspernatur aliquid
          velit pariatur doloribus delectus, sapiente odio eligendi inventore? Dignissimos dolores nesciunt inventore
          distinctio culpa incidunt!
        </Text>
        <Text style={styles.randomText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis dolores beatae provident non omnis
          mollitia. Eaque consequuntur voluptates, eligendi quidem, aliquid, necessitatibus ipsam ex temporibus facilis
          libero unde esse. Earum facere repellat labore optio, expedita repudiandae dolores tempora modi illum! Minus
          totam fugiat a fugit iste veniam. Quae mollitia cumque dicta, doloribus aspernatur esse quos reprehenderit hic
          fugiat ex eligendi nesciunt doloremque voluptate dolore officiis molestias delectus praesentium magni. Quaerat
          minima nesciunt quis at cupiditate excepturi voluptatum hic ullam? Incidunt, ipsam nostrum! Aspernatur aliquid
          velit pariatur doloribus delectus, sapiente odio eligendi inventore? Dignissimos dolores nesciunt inventore
          distinctio culpa incidunt!
        </Text>
        <Text style={styles.randomText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis dolores beatae provident non omnis
          mollitia. Eaque consequuntur voluptates, eligendi quidem, aliquid, necessitatibus ipsam ex temporibus facilis
          libero unde esse. Earum facere repellat labore optio, expedita repudiandae dolores tempora modi illum! Minus
          totam fugiat a fugit iste veniam. Quae mollitia cumque dicta, doloribus aspernatur esse quos reprehenderit hic
          fugiat ex eligendi nesciunt doloremque voluptate dolore officiis molestias delectus praesentium magni. Quaerat
          minima nesciunt quis at cupiditate excepturi voluptatum hic ullam? Incidunt, ipsam nostrum! Aspernatur aliquid
          velit pariatur doloribus delectus, sapiente odio eligendi inventore? Dignissimos dolores nesciunt inventore
          distinctio culpa incidunt!
        </Text>
      </ScrollView>
      <Pressable style={styles.button} onPress={onAddMeal}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3cf',
    width: 70,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 34,
    marginBottom: 3,
  },
  randomText: {
    fontSize: 18,
    marginTop: 20,
  },
})
