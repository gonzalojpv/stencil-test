import { vueOutputTarget } from '@stencil/vue-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: 'stencil-library', // i.e.: stencil-library
      proxiesFile: '../vue-library/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
