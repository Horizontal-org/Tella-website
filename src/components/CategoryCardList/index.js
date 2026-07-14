import React from 'react';
import DocCardList from '@theme/DocCardList';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

// Renders the cards for a sidebar category that isn't the current page's own
// category (e.g. this page's category, used from docs/home.md to show cards
// for "Discover Tella", "Get Started", etc). Matches by `href` (the doc's
// `slug` frontmatter) instead of `label`, since the label is translated per
// locale but the slug isn't.
//
// Relies on useDocsSidebar() from `@docusaurus/plugin-content-docs/client`,
// which is not part of Docusaurus's stable public API and could change on a
// future version upgrade (would surface as a build error, not a silent bug).
export default function CategoryCardList({href}) {
  const sidebar = useDocsSidebar();
  const category = sidebar?.items?.find(
    (item) => item.type === 'category' && item.href === href,
  );
  if (!category) {
    return null;
  }
  return <DocCardList items={category.items} />;
}
