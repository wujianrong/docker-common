const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      webSocketURL: 'ws://0.0.0.0:8080/ws',
    }
  }

})
