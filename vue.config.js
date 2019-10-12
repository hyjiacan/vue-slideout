module.exports = {
  publicPath: './',
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 清除css，js版本号
      config.output.filename('js/[name].js').end();
      config.output.chunkFilename('js/[name].js').end();
      // 为生产环境修改配置...
      config.plugin('extract-css').tap(args => [{
        filename: `css/[name].css`,
        chunkFilename: `css/[name].css`
      }])
    }
  }
}
