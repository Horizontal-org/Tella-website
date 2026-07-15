import React from 'react';
import DocCardList from '@theme/DocCardList';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

// Renders the cards for a sidebar category that isn't the current page's own
// category (e.g. this page's category, used from docs/home.md to show cards
// for "Discover Tella", "Get Started", etc). Matches by `href` (the doc's
// `slug` frontmatter) instead of `label`, since the label is translated per
// locale but the slug isn't.
//
// The sidebar's own item.href is already prefixed with the current locale's
// baseUrl (e.g. "/fr/discover" when building all locales together, vs plain
// "/discover" for a single-locale build or the default locale) — so the
// `href` prop passed in here (always the unprefixed path, e.g. "/discover")
// must go through useBaseUrl() before comparing, or this never matches for
// any non-default locale in a combined multi-locale build.
//
// Relies on useDocsSidebar() from `@docusaurus/plugin-content-docs/client`,
// which is not part of Docusaurus's stable public API and could change on a
// future version upgrade (would surface as a build error, not a silent bug).
export default function CategoryCardList({href}) {
  const sidebar = useDocsSidebar();
  const prefixedHref = useBaseUrl(href);
  const category = sidebar?.items?.find(
    (item) => item.type === 'category' && item.href === prefixedHref,
  );
  if (!category) {
    return null;
  }
  return <DocCardList items={category.items} />;
}
