// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tella Documentation',
  tagline: 'Document & protect',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://beta.docs.tella-app.org/',
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Tella Documentation',
        logo: {
          alt: 'Tella Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/getting-started',
            position: 'left',
            label: 'Getting Started',
          },
          {
            href: 'https://tella-app.org/',
            label: 'Tella website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'contact@wearehorizontal.org ',
                href: 'mailto: contact@wearehorizontal.org',
              },
              {
                label: 'Mastodon',
                href: 'https://infosec.exchange/@tella',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Tella_app',
              },
            ],
          },
          {
            title: 'About us',
            items: [
              {
                label: 'Horizontal',
                href: 'https://wearehorizontal.org/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Horizontal-org/',
              },
            ],
          },
        ],
        copyright: `Tella is a project by Horizontal.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
