module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("postcss-nested"),
    require("postcss-extend"),
    require("autoprefixer"),
  ],
};
