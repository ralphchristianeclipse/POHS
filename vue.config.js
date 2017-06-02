module.exports = {
    port: 3000,
    html: {
        title: 'Test',
        template: './index.html',
    },
    filename: {
        js: "js/[name].js",
        css: "css/[name].css",
        static: "assets/[name].[ext]",
    },
    babel: {
        "plugins": ["babel-plugin-inline-import"]
    }
}