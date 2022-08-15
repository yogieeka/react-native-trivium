import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import {
  Brand,
  Colors,
  navigateAndSimpleReset,
  setDefaultTheme,
  useTheme,
} from 'react-native-trivium';

const StartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme();

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true);
      }, 2000)
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View
      style={[Layout.fill, Layout.colCenter, { backgroundColor: '#079DC7' }]}
    >
      <Brand />
      <ActivityIndicator
        color={Colors.white}
        size={'large'}
        style={[Gutters.largeVMargin]}
      />
      <Text style={[Fonts.textCenter, { color: Colors.white }]}>
        {'Welcome'}
      </Text>
    </View>
  );
};

export default StartupContainer;
