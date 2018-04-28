/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  // {
  //   caption: 'User1',
  //   image: '/test-site/img/docusaurus.svg',
  //   infoLink: 'https://www.facebook.com',
  //   pinned: true,
  // },
];

const siteConfig = {
  title: 'graphql-compose' /* title for your website */,
  tagline: 'Toolkit for generating complex GraphQL schemas',
  url: 'https://graphql-compose.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  organizationName: 'graphql-compose',
  projectName: 'graphql-compose-docs',
  headerLinks: [
    { doc: 'intro-quick-start', label: 'Docs' },
    { doc: 'api-TypeComposer', label: 'API' },
    { foc: 'plugin--list', label: 'Plugins' },
    // { page: 'help', label: 'Support' },
    // see Algolia to search by docs
    // { search: true },
    // { blog: true, label: 'Blog' },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',
  /* colors for website */
  colors: {
    primaryColor: '#400d7d',
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' + new Date().getFullYear() + ' graphql-compose',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/graphql-compose/graphql-compose',
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',
};

module.exports = siteConfig;
