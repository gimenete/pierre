import '@/app/prose.css';
import Footer from '@/components/Footer';
import { renderMDX } from '@/lib/mdx';
import { preloadFile } from '@pierre/diffs/ssr';

import { DocsLayout } from '../../docs/DocsLayout';
import { HeadingAnchors } from '../../docs/HeadingAnchors';
import { ProseWrapper } from '../../docs/ProseWrapper';
import {
  TREES_BASIC_USAGE,
  TREES_INSTALLATION_BUN,
  TREES_INSTALLATION_NPM,
  TREES_INSTALLATION_PNPM,
  TREES_INSTALLATION_YARN,
} from './Overview/constants';

export default function TreesDocsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-5 xl:max-w-[80rem]">
      <DocsLayout>
        <div className="min-w-0 space-y-8">
          <HeadingAnchors />
          <OverviewSection />
        </div>
      </DocsLayout>
      <Footer />
    </div>
  );
}

async function OverviewSection() {
  const [basicUsage, installBun, installNpm, installPnpm, installYarn] =
    await Promise.all([
      preloadFile(TREES_BASIC_USAGE),
      preloadFile(TREES_INSTALLATION_BUN),
      preloadFile(TREES_INSTALLATION_NPM),
      preloadFile(TREES_INSTALLATION_PNPM),
      preloadFile(TREES_INSTALLATION_YARN),
    ]);
  const content = await renderMDX({
    filePath: 'trees/docs/Overview/content.mdx',
    scope: {
      basicUsage,
      installBun,
      installNpm,
      installPnpm,
      installYarn,
    },
  });
  return <ProseWrapper>{content}</ProseWrapper>;
}
