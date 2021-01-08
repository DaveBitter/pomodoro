const config = {
    babelrc: false,
    presets: [
        [
            "@babel/env",
            {
                modules: false
            }
        ],
        "@babel/react"
    ],
    plugins: [
        "transform-es2015-modules-commonjs"
    ]
};

module.exports = require("babel-jest").createTransformer(config);
