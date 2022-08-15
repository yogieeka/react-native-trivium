import React from 'react';
import { ScrollView } from 'react-native';
import { AddSellerComponent, useTheme } from 'react-native-trivium';

const SellerContainer = () => {
  const { Gutters, Layout } = useTheme();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <AddSellerComponent />
    </ScrollView>
  );
};

export default SellerContainer;
