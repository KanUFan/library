const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@': resolvePath('./src'),
            '@app': resolvePath('./src/app'),
            '@assets': resolvePath('./src/assets'),
            '@components': resolvePath('./src/components'),
            '@services': resolvePath('./src/services'),
            '@features': resolvePath('./src/features'),
            '@utils': resolvePath('./src/utils'),
            '@views': resolvePath('./src/views'),
        }
    }
}