
#import "RNSimInfo.h"
#import <CoreTelephony/CTTelephonyNetworkInfo.h>
#import <CoreTelephony/CTCarrier.h>

@implementation RNSimInfo

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE(RNSimInfo)

- (NSDictionary *) constantsToExport
{
    CTCarrier *carrier = [[CTTelephonyNetworkInfo new] subscriberCellularProvider];
    NSString *countryCode = carrier.isoCountryCode;
    NSString *mobileCountryCode = carrier.mobileCountryCode;
    NSString *mobileNetworkCode = carrier.mobileNetworkCode;
    NSString *carrierName = carrier.mobileCountryCode;

    return @{
        @"countryCode": countryCode ?: "",
        @"mobileCountryCode": mobileCountryCode ?: "",
        @"mobileNetworkCode": mobileNetworkCode ?: "",
        @"carrierName": carrierName ?: "",
    };
}
@end
  