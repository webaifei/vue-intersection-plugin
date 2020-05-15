import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
const version = process.env.VERSION || require('./package.json').version;
const config = {
    banner: `/**
* vue-intersection-plugin-revision v${version}
* (c) ${new Date().getFullYear()} webkong
* @license MIT
*/`
};
export default {
    input: "src/index.js",
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ],
    output: [
        {
        file: "dist/index.umd.js",
        format: "umd",
        name: "VueIntersection",
        banner: config.banner
    },
        {
            file: "dist/index.esm.js",
            format: "es",
            banner: config.banner
        }
    ]
}