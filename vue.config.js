const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "", 
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  chainWebpack: config => {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

  pwa: {
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      skipWaiting: true,
      clientsClaim: true,
      importScripts: [
        'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
      ],
      navigateFallback: '/',
      navigateFallbackDenylist: [/\/api\//]
    }
  }
};
