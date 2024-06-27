import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="list"
          options={{
            drawerLabel: 'List',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="calendar"
          options={{
            drawerLabel: 'Calendar',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
