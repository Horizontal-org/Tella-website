import React from 'react';
import DocCardList from '@theme/DocCardList';
import {translate} from '@docusaurus/Translate';

// Cards for docs/home.md's "Go further" section. Unlike the other sections
// on that page, these don't map to a single sidebar category (they link to
// docs/FAQ.md, docs/whats-new.md, docs/privacy-policy.md and the contact-us
// page), so they can't use <CategoryCardList/>. Extracted into a component
// so the label/description text is translatable via code.json instead of
// being hardcoded per-locale inside home.md.
export default function GoFurtherCards() {
  const items = [
    {
      type: 'link',
      href: '/faq',
      label: translate({
        id: 'goFurther.faq.label',
        message: 'Frequently asked questions (FAQ)',
      }),
      description: translate({
        id: 'goFurther.faq.description',
        message: 'Frequently asked questions about Tella',
      }),
    },
    {
      type: 'link',
      href: '/contact-us',
      label: translate({
        id: 'goFurther.contactUs.label',
        message: 'Contact us',
      }),
      description: translate({
        id: 'goFurther.contactUs.description',
        message: 'Reach out for support or inquiries.',
      }),
    },
    {
      type: 'link',
      href: '/releases',
      label: translate({
        id: 'goFurther.releases.label',
        message: "What's new (changelog)",
      }),
      description: translate({
        id: 'goFurther.releases.description',
        message: 'Tella changelogs',
      }),
    },
    {
      type: 'link',
      href: '/privacy',
      label: translate({
        id: 'goFurther.privacy.label',
        message: 'Privacy Policy',
      }),
      description: translate({
        id: 'goFurther.privacy.description',
        message: 'Tella Privacy Policy',
      }),
    },
  ];
  return <DocCardList items={items} />;
}
