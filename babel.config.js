module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    'react-native-reanimated/plugin',
    [
      "module-resolver",
      {
        root:['./src'],
        alias:{
          "@assets":'./src/assets',
          "@features":'./src/features',
          "@navigation":'./src/navigation',
          "@components":'./src/components',
          "@style":'./src/style',
          "@state":'./src/state',
          "@service":'./src/service',
          "@utils":'./src/utils'
        }
      }
    ]
  ]
};
