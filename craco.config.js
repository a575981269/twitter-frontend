const CracoAlias = require("craco-alias");
//webpack 的 配置
module.exports = {
    plugins:[
        {
            plugin:CracoAlias,
            options:{
                baseUrl:'./src',
                source: 'jsconfig'
            }
        }
    ]
};