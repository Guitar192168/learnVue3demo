const vue = require('@vitejs/plugin-vue')
module.exports = {
  
    plugins: [
        vue()
    ]
}

// export default {
//     proxy: {
//       '/api': {
//         target: 'http://kungeek.qywechat',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\cd/api/, '')
//       }
//     }
//   }
  