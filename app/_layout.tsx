import { Stack } from 'expo-router'

interface Props {}

export default function MainLayout({}: Props) {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}
