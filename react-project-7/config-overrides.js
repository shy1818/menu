
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
  
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@As': resolve('assets'),
        '@C': resolve('components'),
        '@commons': resolve('components/commons'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
        '@hoc': resolve('components/hoc'),
        "@store": resolve('store'),
        "@connect": resolve('connect'),
    }
    

    return config;
};