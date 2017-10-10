module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config; // stay immutable here

    appConfig.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    });

    // Change the name of the server output file in production
    if (target === 'node' && !dev) {
      appConfig.output.filename = 'custom.js';
    }

    return appConfig;
  },
};
