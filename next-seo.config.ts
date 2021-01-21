const title = 'Vihar Kurama – Developer, writer, designer.';
const description = 'Full-stack developer, JavaScript enthusiast, and designer.';

const SEO = {
  title,
  description,
  canonical: 'https://vihark.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://vihark.io',
    title,
    description,
    images: [
      {
        url: '',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@vihar13k',
    site: '@vihar13k',
    cardType: 'summary_large_image'
  }
};

export default SEO;
