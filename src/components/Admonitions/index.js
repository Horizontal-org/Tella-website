import React from 'react';
import Admonition from '@theme/Admonition';

// Fixed-type wrappers around @theme/Admonition. The `type` prop must stay a
// literal Docusaurus keyword (note/tip/warning/danger/info) to get the right
// color/icon, but Weblate's MDX extractor treats every quoted JSX attribute
// as translatable text — so type="note" was getting translated per-locale
// (e.g. type="nota") and losing its styling. Hardcoding type here in JS
// keeps it out of the .mdx source entirely; only `title` stays translatable.
//
// `title` is only forwarded when set: @theme/Admonition merges its default
// title (e.g. "note") with `{...props}`, so passing `title={undefined}`
// would still overwrite that default with undefined and blank the heading.

export const Note = ({title, children}) => (
  <Admonition type="note" {...(title ? {title} : {})}>{children}</Admonition>
);

export const Tip = ({title, children}) => (
  <Admonition type="tip" {...(title ? {title} : {})}>{children}</Admonition>
);

export const Warning = ({title, children}) => (
  <Admonition type="warning" {...(title ? {title} : {})}>{children}</Admonition>
);

export const Danger = ({title, children}) => (
  <Admonition type="danger" {...(title ? {title} : {})}>{children}</Admonition>
);

export const Info = ({title, children}) => (
  <Admonition type="info" {...(title ? {title} : {})}>{children}</Admonition>
);
