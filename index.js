
import { NativeModules } from 'react-native';

const { RNSimInfo } = NativeModules;

const isEmpty = value => value.trim().length === 0;

const { countryCode, mobileCountryCode, mobileNetworkCode, carrierName } = RNSimInfo;

export default {
  getCountryCode: (defaultValue = '') => isEmpty(countryCode) ?  defaultValue : countryCode,
  getMobileCountryCode: (defaultValue = '') => isEmpty(mobileCountryCode) ? defaultValue : mobileCountryCode,
  getNetworkCode: (defaultValue = '') => isEmpty(mobileNetworkCode) ? defaultValue: mobileNetworkCode,
  getCarrierName: (defaultValue = '') => isEmpty(carrierName) ? defaultValue: carrierName,
};
