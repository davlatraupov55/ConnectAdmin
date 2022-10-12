import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "../Screens/MainScreen";
import AuthScreen from "../Screens/AuthScreen";
import RoutName from "../Identificator";
import StudentsScreen from "../Screens/StudentsScreen";

const Stack = createNativeStackNavigator();



function AppNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={RoutName}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="AuthScreen" component={AuthScreen}/>
      <Stack.Screen name="StudentsScreen" component={StudentsScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator