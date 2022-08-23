const withImages = require('next-images')
module.exports = withImages({
    images : {
        loader: 'akamai',
        path: '/',
    }
})