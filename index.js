import locale from 'react-native-locale-detector'

export default {
  type: 'languageDetector',
  detect: () => locale,
}
