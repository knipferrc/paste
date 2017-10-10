module.exports = {
  modify(config, { target, dev }, webpack) {
    const appConfig = config

    appConfig.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    })

    return appConfig
  }
}
