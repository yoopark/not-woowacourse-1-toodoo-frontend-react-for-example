/// THIS FILE IS NOT USED IN THE PROJECT
import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * @See {@link https://www.chakra-ui.com/docs/get-started/migration#refactor-custom-theme}
 */
const config = defineConfig({
  strictTokens: true,
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'SUIT Variable, sans-serif' },
        body: { value: 'SUIT Variable, sans-serif' },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export { system };
