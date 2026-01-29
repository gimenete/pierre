import { CustomScrollbarCSS } from '@/components/CustomScrollbarCSS';
import type { PreloadFileOptions } from '@pierre/diffs/ssr';

const options = {
  theme: { dark: 'pierre-dark', light: 'pierre-light' },
  disableFileHeader: true,
  unsafeCSS: CustomScrollbarCSS,
} as const;

export const TREES_BASIC_USAGE: PreloadFileOptions<undefined> = {
  file: {
    name: 'FileExplorer.tsx',
    contents: `import { Tree } from '@pierre/trees/react';

const files = [
  { path: 'src/index.ts', type: 'file' },
  { path: 'src/components/Button.tsx', type: 'file' },
  { path: 'src/utils/helpers.ts', type: 'file' },
  { path: 'package.json', type: 'file' },
];

export function FileExplorer() {
  return <Tree files={files} />;
}`,
  },
  options,
};

export const TREES_INSTALLATION_BUN: PreloadFileOptions<undefined> = {
  file: {
    name: 'terminal',
    contents: `bun add @pierre/trees`,
  },
  options,
};

export const TREES_INSTALLATION_NPM: PreloadFileOptions<undefined> = {
  file: {
    name: 'terminal',
    contents: `npm install @pierre/trees`,
  },
  options,
};

export const TREES_INSTALLATION_PNPM: PreloadFileOptions<undefined> = {
  file: {
    name: 'terminal',
    contents: `pnpm add @pierre/trees`,
  },
  options,
};

export const TREES_INSTALLATION_YARN: PreloadFileOptions<undefined> = {
  file: {
    name: 'terminal',
    contents: `yarn add @pierre/trees`,
  },
  options,
};
