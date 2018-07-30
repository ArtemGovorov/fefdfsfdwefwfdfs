module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'App'
        }
      }
    ],
    '@neutrinojs/jest'
  ]
}
