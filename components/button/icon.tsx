import { ReactNode } from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'

interface Props {
  onPress?: () => void
  children: ReactNode
  style?: ViewStyle
}

export const IconButton = ({ onPress, children, style }: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
})
