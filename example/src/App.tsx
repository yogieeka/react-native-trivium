import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Brand, { ListTv } from 'react-native-trivium';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 100,
          justifyContent: 'center',
          alignContent: 'flex-end',
        }}
      >
        <Brand />
        <ListTv />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
