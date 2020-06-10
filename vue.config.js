module.exports={
    configureWebpack:{
        resolve: {
            extensions:[],
            alias:{
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}