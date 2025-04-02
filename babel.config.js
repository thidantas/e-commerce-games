module.exports = {
  presets: ['next/babel', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true
      }
    ]
  ],
  env: {
    test: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            ssr: false,
            displayName: false
          }
        ]
      ]
    }
  }
}
