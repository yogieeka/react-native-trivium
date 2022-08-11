import Brand from './Components/Brand';
import ListTv from './Components/ListTv';

export default Brand;
export { ListTv };

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
