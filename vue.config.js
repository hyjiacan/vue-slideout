module.exports = {
  publicPath: './',
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
