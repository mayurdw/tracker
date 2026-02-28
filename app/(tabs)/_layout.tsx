import { Tabs } from 'expo-router'

export default function TabLayout() {

    return (
        <Tabs screenOptions={{
            headerShown: true
        }}>
            <Tabs.Screen
                name='index'
                options={{
                    headerTitle: 'Home'
                }}
            />
            <Tabs.Screen
                name='add_entry'
                options={{
                    headerTitle: 'Add Entry'
                }}
            />
            <Tabs.Screen
                name='graph'
                options={{
                    headerTitle: 'Visual'
                }}
            />
        </Tabs>
    )
}
