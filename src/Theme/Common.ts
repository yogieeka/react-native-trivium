/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import type { CommonParams } from './theme';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        width: 200,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      textInputSmall: {
        borderWidth: 0.5,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 40,
        width: 150,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
      },
    }),
  };
}
