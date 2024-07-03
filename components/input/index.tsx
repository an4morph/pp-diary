import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Controller, Control, FieldValues, Path } from 'react-hook-form'

interface Props<T extends FieldValues> {
  control: Control<T>
  error?: string
  name: Path<T>
}

export const Input = <T extends object>({ control, error, name }: Props<T>) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={(value) => onChange(value)} value={value} />
          <Text>{error}</Text>
        </View>
      )}
      name={name}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ddd',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
    width: '100%',
  },
})
