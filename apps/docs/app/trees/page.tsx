import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import { PierreCompanySection } from '@/components/PierreCompanySection';

import { Hero } from '../Hero';
import type { ProductId } from '../product-config';

const PRODUCT_ID: ProductId = 'trees';

export default function TreesHome() {
  return (
    <div className="mx-auto min-h-screen max-w-5xl px-5 xl:max-w-[80rem]">
      <Header className="-mb-[1px]" />
      <Hero productId={PRODUCT_ID} />

      <section className="space-y-12 pb-8">
        {/* TODO: Add tree-specific example sections */}
        <div className="text-muted-foreground py-20 text-center">
          <p>Tree examples coming soon...</p>
        </div>
      </section>

      <PierreCompanySection />
      <Footer />
    </div>
  );
}
