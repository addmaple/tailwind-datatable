const path = require("path")

module.exports = {
  output: {
    publicPath: "/open-source/tailwind-datatable",
  },
  mode: "production",
  devServer: {
    contentBase: path.resolve(__dirname, "../../public"),
  },
  devtool: "source-map",
}
