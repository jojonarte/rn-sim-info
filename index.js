
import { NativeModules } from 'react-native';

const { RNSimInfo } = NativeModules;

const isEmpty = value => value.trim().length === 0;

const { countryCode, mobileCountryCode, mobileNetworkCode, carrierName } = RNSimInfo;

export default {
  getCountryCode: (fallbackValue = '') => isEmpty(countryCode) ?  fallbackValue : countryCode,
  getMobileCountryCode: (fallbackValue = '') => isEmpty(mobileCountryCode) ? fallbackValue : mobileCountryCode,
  getNetworkCode: (fallbackValue = '') => isEmpty(mobileNetworkCode) ? fallbackValue: mobileNetworkCode,
  getCarrierName: (fallbackValue = '') => isEmpty(carrierName) ? fallbackValue: carrierName,
};
