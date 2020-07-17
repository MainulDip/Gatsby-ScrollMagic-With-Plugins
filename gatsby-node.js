const Path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === 'build-html'
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null()
              }
            ]
          : []
    },
    resolve: {
      alias: {
        ScrollMagic: Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
        ),
        'debug.addIndicators': Path.resolve(
          'node_modules',
          'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
        )
      }
    }
  })
}
