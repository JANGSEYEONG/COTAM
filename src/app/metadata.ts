import type { Metadata } from 'next';

import {
  SITE_DESCRIPTION,
  SITE_FULL_TITLE,
  SITE_KEYWORD,
  SITE_NAME,
  SITE_URL,
} from '@/constants/metadata';

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`, // 페이지 타이틀 템플릿
    default: SITE_NAME, // 페이지 타이틀이 없을 때 사용될 기본값
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORD,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph
  openGraph: {
    title: `${SITE_NAME} : ${SITE_FULL_TITLE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} : ${SITE_FULL_TITLE}`,
    description: SITE_DESCRIPTION,
  },

  // 검색엔진 인증용
  verification: {
    google: '2QYnB8AH6zitSbnBig4hLY1tLLm9Ea-sPqaub6uy2Is',
  },

  // 추가 메타데이터
  authors: [{ name: SITE_NAME }],
  category: 'IT Study',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
