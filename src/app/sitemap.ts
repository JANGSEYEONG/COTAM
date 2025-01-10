import { MetadataRoute } from 'next';

import { SITE_URL } from '@/constants/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/people`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/recruit`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
