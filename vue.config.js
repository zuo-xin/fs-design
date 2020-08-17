const path = require("path");

module.exports = {
  publicPath:process.env.NODE_ENV === 'production'? '/dist/': '/',
  outputDir: "dist",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
    } else {
      config.mode = "development";
      config.devtool = "source-map";
    }
    Object.assign(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        }
      },
    });
  },
  productionSourceMap: false,
  css: {
    extract: process.env.NODE_ENV === "production",
    sourceMap: false,
    requireModuleExtension: true,
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/css/variables.scss";`,
      },
    },
  },
  devServer: {
    port: 1999,
    host: "0.0.0.0",
    disableHostCheck: true,
    hotOnly: false,
    https: false,
    // proxy: {
    //   "/api": {
    //     ws: false,
    //     //target: 'https://m.feisu.com/', //生产环境
    //     target: "http://api-feisu.whgxwl.com:8080/",
    //     // target:'http://fairy.whgxwl.com:6060/', //繁体
    //     //target:'http://10.32.180.202/', //赵
    //     //target:'http://10.32.180.197/',//纪
    //     changeOrigin: true,
    //     ws: true,
    //     secure: false,
    //     // pathRewrite: {
    //     //    '^/api': ''
    //     // }
    //   },
    // },
  },
};
