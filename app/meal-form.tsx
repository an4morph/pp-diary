import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../components/button'
import { useRouter } from 'expo-router'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../components/input'

interface Props {}
type TSchema = z.infer<typeof formSchema>

const formSchema = z.object({
  username: z.string().min(5, {
    message: 'Username must be at least 5 characters.',
  }),
})

export default function MealForm({}: Props) {
  const router = useRouter()

  const form = useForm<TSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'lala',
    },
  })

  const onSubmit = form.handleSubmit((data) => console.log('qqq', data))

  const goToList = () => {
    console.log('goToList')
    onSubmit()
    // router.navigate('/list')
  }

  return (
    <View style={styles.container}>
      <Text>there will be a form for creating a new diary entry</Text>

      <Input<TSchema> control={form.control} name="username" />

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
