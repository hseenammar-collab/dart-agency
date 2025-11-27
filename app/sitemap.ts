import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dartagency.iq', lastModified: new Date(), priority: 1 },
  ];
}
