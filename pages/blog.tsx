// layouts
import { SiteLayout } from 'layouts';

// seo
import { NextSeo } from 'next-seo';

function BlogPage() {
  return (
    <p>
      <NextSeo title="Vihar Kurama | Blog" description="" />
      <SiteLayout>
        <p className="mt-5 text-center">Coming Soon!</p>
      </SiteLayout>
    </p>
  );
}

export default BlogPage;
