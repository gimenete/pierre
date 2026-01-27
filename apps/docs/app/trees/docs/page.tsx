import '@/app/prose.css';
import Footer from '@/components/Footer';

import { DocsLayout } from '../../docs/DocsLayout';
import { HeadingAnchors } from '../../docs/HeadingAnchors';
import { ProseWrapper } from '../../docs/ProseWrapper';

export default function TreesDocsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-5 xl:max-w-[80rem]">
      <DocsLayout>
        <div className="min-w-0 space-y-8">
          <HeadingAnchors />
          <OverviewSection />
          {/* TODO: Add more trees documentation sections */}
        </div>
      </DocsLayout>
      <Footer />
    </div>
  );
}

function OverviewSection() {
  return (
    <ProseWrapper>
      <h2 id="overview">Overview</h2>
      <p>
        <code>@pierre/trees</code> is a file tree rendering library for building
        beautiful, interactive file explorers.
      </p>
      <p>Documentation coming soon...</p>
    </ProseWrapper>
  );
}
