module.exports = {
  plugins: [
    [
      'effector-logger/babel-plugin',
      {
        skipEffectorPlugin: true,
        factories: [],
      },
    ],
    ['effector/babel-plugin'],
  ],
}
