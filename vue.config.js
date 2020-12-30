module.exports = {
  publicPath: './',
  productionSourceMap: false,
  filenameHashing: false,
  configureWebpack: {
    output: {
      library: 'Slideout',
      libraryExport: 'default'
    }
  }
}
