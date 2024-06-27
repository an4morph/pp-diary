import { Redirect } from 'expo-router'

/* here is a component that will redirect to the main page, or to onboarding and auth */

export default function EntryPage() {
  return <Redirect href="list" />
}
