import path from 'path'
import { StorybookConfig } from '@storybook/experimental-nextjs-vite'

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },
  docs: {},
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve?.alias || {}),
      components: path.resolve(__dirname, '../src/components'),
      styles: path.resolve(__dirname, '../src/styles')
    }
    return config
  }
}

export default config
