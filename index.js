
import { NativeModules } from 'react-native';

const { RNSimInfo } = NativeModules;

export default {
  getCountryCode: () => RNSimInfo.countryCode,
  getMobileCountryCode: () => RNSimInfo.mobileCountryCode,
  getNetworkCode: () => RNSimInfo.mobileNetworkCode,
  getCarrierName: () => RNSimInfo.carrierName,
};
