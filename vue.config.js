module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/lets_bike/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss"; @import "~@/assets/scss/mixin.scss";`,
      },
    },
  },
};
