import { ReactNode } from 'react'
import { Text, Pressable, StyleSheet, ViewStyle, TextStyle } from 'react-native'

interface Props {
  onPress?: () => void
  children: ReactNode
  containerStyles?: ViewStyle
  textStyles?: TextStyle
}

export const Button = ({ onPress, children, containerStyles, textStyles }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, containerStyles]}>
      <Text style={[textStyles, styles.text]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#157ea1',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
})
