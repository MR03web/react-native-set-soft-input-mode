# react-native-set-soft-input-mode

setSoftInputMode on Android.

## Installation

### Download

Run `npm i react-native-set-soft-input-mode --save`
Or
Run `yarn add react-native-set-soft-input-mode`

### Plugin Installation

step-1. In your android/settings.gradle file, make the following additions:

```java
include ':react-native-set-soft-input-mode'
project(':react-native-set-soft-input-mode').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-set-soft-input-mode/android')
```

step-2. In your android/app/build.gradle file, add the `:react-native-set-soft-input-mode` project as a compile-time dependency:

```java
...
dependencies {
    ...
    compile project(':react-native-set-soft-input-mode')
}
```

step-3. Update the MainApplication.java file to use `react-native-set-soft-input-mode` via the following changes:

```java
import io.github.mr03web.softinputmode.SoftInputModePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new SoftInputModePackage()  // here
            );
        }
    };

    ...
}
```

## Usage

Import `react-native-set-soft-input-mode` in your JS file.

Use like so:

```javascript
import SoftInputMode from "react-native-set-soft-input-mode";

export default class Page extends Component {
  componentDidMount() {
    SoftInputMode.set(SoftInputMode.ADJUST_RESIZE);
  }
}
```

## Options

| Name               | Description                   |
| ------------------ | ----------------------------- |
| ADJUST_NOTHING     | SOFT_INPUT_ADJUST_NOTHING     |
| ADJUST_PAN         | SOFT_INPUT_ADJUST_PAN         |
| ADJUST_RESIZE      | SOFT_INPUT_ADJUST_RESIZE      |
| ADJUST_UNSPECIFIED | SOFT_INPUT_ADJUST_UNSPECIFIED |
