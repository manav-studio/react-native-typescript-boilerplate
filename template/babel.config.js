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
          '@models': './src/models',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@utils': './src/utils',
        },
      },
    ],
    // 'nativewind/babel',
    // 'react-native-reanimated/plugin',
  ],
};
