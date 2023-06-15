module.exports = {
  staticDirs: ['../public'],
  stories: ['../components/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
    {
      name: 'storybook-addon-swc',
      options: {
        enable: true,
        enableSwcLoader: true,
        enableSwcMinify: true,
        swcLoaderOptions: {},
        swcMinifyOptions: {}
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
};
