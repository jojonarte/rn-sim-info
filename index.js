
import { NativeModules } from 'react-native';

const { RNSimInfo } = NativeModules;

export default {
  getCountryCode: () => RNSimInfo.countryCode,
};
