module.exports = {
  pages: {
    console: {
      entry: 'src/modules/console/console.js',
      template: 'public/console.html',
      fileName: 'console.html',
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'console page',
      chunks: ['console']
    },
    client: 'src/modules/client/client.js'
  }
}
