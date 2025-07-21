module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { ios: '12', android: '8', electron: '20' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ]
};