module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-syntax-object-rest-spread',
    '@babel/plugin-transform-runtime',
  ],
};
