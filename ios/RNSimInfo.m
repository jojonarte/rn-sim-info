
#import "RNSimInfo.h"
#import <CoreTelephony/CTTelephonyNetworkInfo.h>
#import <CoreTelephony/CTCarrier.h>

@implementation RNSimInfo

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE(RNSimInfo)

- (NSString *) countryCode
{
    CTCarrier *carrier = [[CTTelephonyNetworkInfo new] subscriberCellularProvider];
    NSString *countryCode = [carrier.isoCountryCode;

    return @"TEST";//countryCode;
}

- (NSDictionary *) constantsToExport
{
    return @{
        @"countryCode": countryCode,
    };
}
@end
  