module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@*': 'src/*',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@data': './src/data',
          '@lib': './src/lib',
          '@modals': './src/modals',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@utils': './src/utils',
          '@i18n': './src/i18n',
          '@services': './src/services',
        },
      },
    ],
    'nativewind/babel',
    // 'react-native-reanimated/plugin',
  ],
};
