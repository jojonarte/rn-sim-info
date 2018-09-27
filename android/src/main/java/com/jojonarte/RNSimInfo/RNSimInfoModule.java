
package com.jojonarte.RNSimInfo;

import android.content.Context;
import android.telephony.TelephonyManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

import javax.annotation.Nullable;

public class RNSimInfoModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSimInfoModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSimInfo";
  }

  @Override
  public @Nullable
  Map<String, Object> getConstants() {
    TelephonyManager telephonyManager = (TelephonyManager) reactContext.getSystemService(Context.TELEPHONY_SERVICE);
    HashMap<String, Object> constants = new HashMap<String, Object>();

    constants.put("countryCode", telephonyManager.getSimCountryIso());
    constants.put("mobileCountryCode", telephonyManager.getSimOperator());
    constants.put("mobileNetworkCode", telephonyManager.getSimOperator());
    constants.put("carrierName", telephonyManager.getSimOperatorName());

    return constants;
  }
}