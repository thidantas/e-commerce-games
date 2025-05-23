import path from 'path'
import { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },

  docs: {
    autodocs: true
  },

  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve?.alias || {}),
      src: path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles')
    }

    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
}

export default config
