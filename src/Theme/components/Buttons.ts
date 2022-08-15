import { StyleSheet } from 'react-native';
import type { CommonParams } from '../theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  };

  const small = {
    ...Layout.center,
    height: 30,
    backgroundColor: Colors.primary,
  };

  const rounded = {
    ...base,
    borderRadius: 20,
  };

  const roundedSmall = {
    ...small,
    borderRadius: 20,
  };

  return StyleSheet.create({
    base,
    small,
    rounded,
    roundedSmall,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
  });
}
