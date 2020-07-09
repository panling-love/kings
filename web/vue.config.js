module.exports = {
    outputDir: '../server/web',
    publicPath: process.env.NODE_ENV === 'production' ?
        '/web' : '/'
}