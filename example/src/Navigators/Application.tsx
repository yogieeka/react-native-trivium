import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './utils';
import { useTheme } from 'react-native-trivium';
import Home from '../Home';

const Stack = createStackNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar
          barStyle={darkMode ? 'light-content' : 'dark-content'}
          backgroundColor={colors.primary}
        />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
