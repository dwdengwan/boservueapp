module.exports = {
    css: {
        postcss: {
            plugins: [
                require('postcss-pxtorem')({
                    rootValue: 100, // 换算的基数（我的需要应用到大屏，设计图为1920*1080，一般移动端的设计图为750px，这个数值为37.5）
                    selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                    propList: ['*']
                })
            ]
        }
    }
}