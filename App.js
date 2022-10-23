import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from'./HomeView'
import HistoryView from'./HistoryView'

const Tab = createBottomTabNavigator();

export default function App() {

return (
    <NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeView} />
<Tab.Screen name="History" component={HistoryView} />

</Tab.Navigator>
</NavigationContainer>
);

}