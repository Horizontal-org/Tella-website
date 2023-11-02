// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tella',
  tagline: 'Document & protect',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: process.env.PRODUCTION_URL || '',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tella', // Usually your GitHub org/user name.
  projectName: 'tella-docusaurus ', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Horizontal-org/Tella-Docs/tree/main/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'security, privacy, human rights, encryption, documentation, tool, open source'},
        {name: 'twitter:card', content: 'img/feature.png'},
        {name: 'og:title', content: "Tella Document & Protect"},
        {name: 'og:description', content: "Tella is a secure documentation platform designed for individuals facing challenging environments (repression and survailance) and limited internet connectivity. Tella simplifies the process to document human rights violations and collect crucial data, ensuring your information is shielded from both physical and digital threats. Whether you're an activist, journalist, or human rights defender, Tella enables you to create high-quality, censorship-resistant documentation vital for research, advocacy, and transitional justice. "},
        {name: 'og:url', content: process.env.PRODUCTION_URL},
        {name: 'og:type', content: "website, app, documentation"},
        {name: 'og:image', content:  'img/feature.png'},
      ],
      image: 'img/tella.png',
      navbar: {
        title: 'Tella',
        logo: {
          alt: 'Tella Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            href: '/get-started',
            label: 'Get Started',
            position: 'left',
          },
          {
            href: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            href: '/docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: 'https://blog.wearehorizontal.org/',
            label: 'Blog',
            position: 'left',
          },
           {
            href: '/contact-us',
            label: 'Contact Us',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Get started on Android',
                href: '/get-started-android',
              },
              {
                label: 'Get started on iOS',
                href: '/get-started-ios',
              },
              {
                label: 'Video Tutorials',
                href: '/video-tutorials',
              },
              {
                label: 'Tella for Organizations',
                href: '/for-organizations',
              },


            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Help & Contact',
                href: '/contact-us',
              },
              {
                label: 'Community Meetings',
                href: '/community-meetings',
              },
              {
                label: 'Mastodon',
                href: 'https://infosec.exchange/@tella',
              },
              {
                label: 'X (Twitter)',
                href: 'https://x.com/Tella_app',
              },
              {
                label: 'Donate to Tella',
                href: 'https://wearehorizontal.org/donate',
              },
              {
                label: 'Blog',
                href: 'https://blog.wearehorizontal.org/tag/tella/',
              },
            ],
          },
          {
            title: 'Latest news',
            items: [
              {
                label: 'Changelog',
                href: '/releases',
              },
              {
                label: 'Blog',
                href: 'https://blog.wearehorizontal.org/',
              },
              {
                label: 'Newsletter',
                href: 'https://blog.wearehorizontal.org/#/portal/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About us',
                href: 'https://wearehorizontal.org/about',
              },
              {
                label: 'Privacy policy',
                href: '/privacy-policy',
              },
              {
                label: 'Open Source',
                href: '/open-source',
              },
              {
                label: 'Accessibility',
                href: '/accessibility',
              },
            ],
          },
        ],
        copyright: `Tella is a project by <a href="https://wearehorizontal.org/">Horizontal</a>, a registered 501(c)(3) nonprofit – EIN: 83-1782268. </br> This website is licensed under a Creative Commons 4.0 Attribution International License.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),


    themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 12,
        searchBarShortcutHint: false,
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.svg',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#2c6c97',
          },
        ],
      },
    ],
  ],
};


module.exports = config;
