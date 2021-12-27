// next.config.js
module.exports = {
  webpack: (config, { defaultLoaders }) => {
    defaultLoaders.babel.options.plugins = [require.resolve('@emotion/babel-plugin')];
	return config;
  }
}