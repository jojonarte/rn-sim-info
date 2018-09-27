
# react-native-sim-info

## Getting started

`$ npm install rn-sim-info --save`

### Mostly automatic installation

`$ react-native link rn-sim-info`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `rn-sim-info` and add `RNSimInfo.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSimInfo.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNSimInfoPackage;` to the imports at the top of the file
  - Add `new RNSimInfoPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':rn-sim-info'
  	project(':rn-sim-info').projectDir = new File(rootProject.projectDir, 	'../node_modules/rn-sim-info/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':rn-sim-info')
  	```


## Usage
```javascript
import RNSimInfo from 'rn-sim-info';

// TODO: What to do with the module?
RNSimInfo;
```
  
