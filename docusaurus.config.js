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
  onBrokenMarkdownLinks: 'warn',

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
            href: '/features-overview',
            label: 'Features',
            position: 'left',
          },
          {
            href: '/get-started',
            label: 'Get Started',
            position: 'left',
          },
          {
            href: '/docs',
            label: 'Docs',
            position: 'left',
          },
          {
            href: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            href: 'https://blog.wearehorizontal.org/',
            label: 'Blog',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: '/contact-us',
            label: 'Contact Us',
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
                label: 'Get started guide for Android',
                href: '/get-started-android',
              },
              {
                label: 'Get started guide for iOS',
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
                label: 'Help and Contact us',
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
                label: 'Subscribe to our newsletter',
                href: 'https://blog.wearehorizontal.org/',
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
                label: 'Accesibility details',
                href: '/accessibility',
              },
            ],
          },
        ],
        copyright: `<div> Tella is a project by <a href="https://wearehorizontal.org/">Horizontal</a>, a registered 501(c)(3) nonprofit – EIN: 83-1782268. </br> This website is licensed under a Creative Commons 4.0 Attribution International License. </div>`,
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
        searchBarPosition: 'left',
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
};


module.exports = config;
