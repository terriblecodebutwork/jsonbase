const path = require('path');

module.exports = {
    mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    target: "node",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'jsonbase-api.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'jsonbase-api'
    }
}