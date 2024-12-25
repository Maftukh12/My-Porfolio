module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            type: 'asset/resource',
            test: /\.pdf$/,
          },
        ],
      },
    },
  },
}; 