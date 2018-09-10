"use strict";

const path = require("path");

// let baseURL = "http://172.16.10.7";
// let baseURL = "http://172.16.10.69";
// let baseURL = "http://172.16.10.41";

// let baseURL = "http://172.16.10.12";
// let baseURL = "http://172.16.10.56";
// let baseURL = "http://172.16.10.253";
// let baseURL = "http://172.16.10.19";
// let baseURL = "http://172.16.10.88";


let baseURL = 'https://test.dnvhot.tech';

// 测试地址不需要端口号
// let url_1 = baseURL + ':8101';
// let url_3 = baseURL + ':8188';
// let url_4 = baseURL + ':8103';
let url_1 = baseURL;
let url_3 = baseURL;
let url_4 = baseURL;

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        proxyTable: {
            "/admin": {
                target: url_1,
                changeOrigin: true,
                pathRewrite: {
                    "^/admin": url_1 + "/admin"
                    // "^/admin": url_1 
                }
            },
            // "/admin": {
            //     target: url_2,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         "^/admin": url_2 + "/admin"
            //     }
            // },
            "/securityCode": {
                target: url_3,
                changeOrigin: true,
                pathRewrite: {
                    "^/securityCode": url_3 + "/securityCode"
                }
            },
            "/order": {
                target: url_4,
                changeOrigin: true,
                pathRewrite: {
                    "^/order": url_4 + "/order"
                }
            }
        },
        // Various Dev Server settings

        host: "0.0.0.0", // can be overwritten by process.env.HOST

        port: 8090, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: "eval-source-map",

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },

    build: {
        prodEnv: require('./prod.env'),
        testEnv: require('./test.env'),
        // Template for index.html
        index: path.resolve(__dirname, "../dist/index.html"),

        // Paths
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "./",

        /**
         * Source Maps
         */

        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: "#source-map",

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ["js", "css"],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
