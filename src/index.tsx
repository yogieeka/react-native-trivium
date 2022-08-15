import AddSellerComponent from './Components/AddSellerComponent';
import Brand from './Components/Brand';
import ListTv from './Components/ListTv';
import { useTheme } from './Hooks';
import { navigateAndSimpleReset } from './Navigators/utils';
import { persistor, store } from './Store';
import { setDefaultTheme } from './Store/Theme';
import { Colors } from './Theme/Variables';

export { Brand };
export { AddSellerComponent };
export { ListTv };
export { useTheme };
export { navigateAndSimpleReset };
export { setDefaultTheme };
export { Colors };

export { store, persistor };
export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
