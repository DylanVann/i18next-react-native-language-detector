# i18next-react-native-language-detector

React Native language detector for i18next.

## Installation

```
npm install i18next i18next-react-native-language-detector react-native-locale-detector --save
react-native link
```

## Usage

```javascript
import i18next from 'i18next'
import i18nextReactNative from 'i18next-react-native-language-detector'

i18next
.use(i18nextReactNative)
.init()
```
