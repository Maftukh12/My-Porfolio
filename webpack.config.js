module.exports = {
  module: {
    rules: [
      {
        test: /\.(html|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}; 