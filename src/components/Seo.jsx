import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.qcut.at';
const SITE_NAME = 'Q-Cut';
const DEFAULT_IMAGE = `${SITE_URL}/qcut_logo.png`;

const organizationSchema = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Mulcut Schwarzer & Antropow GesbR',
  alternateName: 'Q-Cut',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: DEFAULT_IMAGE,
  },
  email: 'info@qcut.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schwarzhorngasse 13/24',
    postalCode: '1050',
    addressLocality: 'Vienna',
    addressCountry: 'AT',
  },
  founder: [
    { '@type': 'Person', name: 'Nils Antropow' },
    { '@type': 'Person', name: 'Oskar Schwarzer' },
  ],
};

const softwareSchema = ({ name, description, url, offers }) => ({
  '@type': 'SoftwareApplication',
  '@id': `${url}#software`,
  name,
  description,
  url,
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'Video editing software',
  operatingSystem: 'Windows 10 or newer, macOS',
  image: DEFAULT_IMAGE,
  author: { '@id': `${SITE_URL}/#organization` },
  offers: offers.map(({ price, category }) => ({
    '@type': 'Offer',
    price,
    priceCurrency: 'EUR',
    category,
    availability: 'https://schema.org/InStock',
    url,
  })),
});

const studioDescription = 'Automate multicam video editing for DaVinci Resolve Studio, Adobe Premiere Pro and XML workflows. Sync footage by audio or timecode and keep full control.';
const djDescription = 'Automatic video editing for DJs: detect beats and drops, cut multiple camera angles to music and export ready-to-post social clips on Windows or macOS.';

const pages = {
  '/': {
    title: 'Q-Cut | Multicam Video Editing Software for Videographers',
    description: 'Q-Cut automates multicam video editing for videographers, editors and DJs. Sync cameras to music and export timelines for DaVinci Resolve or Premiere Pro.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          alternateName: 'Q-Cut Multicam Video Editing',
          description: 'Multicam video editing software for videographers, video editors and DJs.',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: 'en',
        },
      ],
    },
  },
  '/studio': {
    title: 'Multicam Video Editing Software | Q-Cut Studio',
    description: studioDescription,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        softwareSchema({
          name: 'Q-Cut Studio',
          description: studioDescription,
          url: `${SITE_URL}/studio`,
          offers: [
            { price: '45.00', category: 'subscription' },
            { price: '480.00', category: 'one-time purchase' },
          ],
        }),
      ],
    },
  },
  '/dj': {
    title: 'Automatic DJ Video Editing & Multicam Clips | Q-Cut DJ',
    description: djDescription,
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        softwareSchema({
          name: 'Q-Cut DJ',
          description: djDescription,
          url: `${SITE_URL}/dj`,
          offers: [
            { price: '0.00', category: 'free' },
            { price: '10.20', category: 'subscription' },
            { price: '300.00', category: 'one-time purchase' },
          ],
        }),
      ],
    },
  },
  '/pricing': {
    title: 'Video Editing Software Pricing | Q-Cut Studio & DJ',
    description: 'Compare Q-Cut Free, Studio and DJ plans for automated multicam video editing, music-based cuts, social clips and professional editing workflows.',
  },
  '/help': {
    title: 'Q-Cut Help Center | Multicam Editing Support',
    description: 'Get help with Q-Cut multicam video editing, audio synchronization, DaVinci Resolve, Adobe Premiere Pro, subscriptions and local processing.',
  },
  '/about': {
    title: 'About Q-Cut | Video Editing Software Built in Vienna',
    description: 'Meet the Vienna-based team behind Q-Cut and learn why we built reliable multicam editing software for videographers, editors and DJs.',
  },
  '/studio/tutorial': {
    title: 'Q-Cut Studio Tutorial | Automated Multicam Editing',
    description: 'Learn the complete Q-Cut Studio workflow: prepare timelines, sync multicam footage, configure music-based cuts and export to your video editor.',
  },
  '/free/download': {
    title: 'Download Free Multicam Video Editing Software | Q-Cut',
    description: 'Download Q-Cut Free for Windows or macOS and automate multicam video editing with up to three cameras and 30-minute timelines.',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        organizationSchema,
        softwareSchema({
          name: 'Q-Cut Free',
          description: 'Free multicam video editing software for up to three cameras and 30-minute timelines.',
          url: `${SITE_URL}/free/download`,
          offers: [{ price: '0.00', category: 'free' }],
        }),
      ],
    },
  },
  '/dj/download': {
    title: 'Download Q-Cut DJ for Windows & macOS',
    description: 'Download Q-Cut DJ for Windows or macOS to turn DJ footage into beat-synced multicam edits, social clips and mini-sets.',
  },
  '/studio/download': {
    title: 'Download Q-Cut Studio for Windows & macOS',
    description: 'Download Q-Cut Studio for Windows or macOS and automate professional multicam timelines for DaVinci Resolve, Premiere Pro and XML workflows.',
  },
  '/impressum': {
    title: 'Legal Information | Q-Cut',
    description: 'Legal information and contact details for Mulcut Schwarzer & Antropow GesbR, the company behind Q-Cut.',
  },
  '/privacy-notice': {
    title: 'Privacy Notice | Q-Cut',
    description: 'Read the Q-Cut privacy notice and learn how Mulcut Schwarzer & Antropow GesbR handles personal data.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Q-Cut',
    description: 'Read the terms governing the use of Q-Cut software and services.',
  },
  '/success': {
    title: 'Purchase Complete | Q-Cut',
    description: 'Your Q-Cut purchase has been completed.',
    noindex: true,
  },
  '/test': {
    title: 'Video Test | Q-Cut',
    description: 'Internal video test page.',
    noindex: true,
  },
  '/video-test': {
    title: 'Video Test | Q-Cut',
    description: 'Internal video test page.',
    noindex: true,
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
}

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePath(pathname);
    const page = pages[normalizedPath] ?? {
      title: 'Page Not Found | Q-Cut',
      description: 'The requested Q-Cut page could not be found.',
      noindex: true,
    };
    const canonicalPath = normalizedPath === '/' ? '/' : normalizedPath;
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;
    const robots = page.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    document.title = page.title;
    document.documentElement.lang = 'en';

    setMeta('meta[name="description"]', { name: 'description', content: page.description });
    setMeta('meta[name="robots"]', { name: 'robots', content: robots });
    setMeta('meta[name="googlebot"]', { name: 'googlebot', content: robots });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    setMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: page.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: page.description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Q-Cut logo' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: page.title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: page.description });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    document.getElementById('qcut-structured-data')?.remove();
    if (page.schema && !page.noindex) {
      const script = document.createElement('script');
      script.id = 'qcut-structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(page.schema);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}

export default Seo;
