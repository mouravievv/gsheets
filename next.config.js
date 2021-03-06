// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, 'variables.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
  distDir: 'out',
};
