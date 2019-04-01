/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = require('./users');

const siteConfig = {
  title: 'graphql-compose' /* title for your website */,
  tagline: 'Toolkit for generating complex GraphQL schemas in Node.js',
  url: 'https://graphql-compose.github.io' /* your website url */,
  editUrl: 'https://github.com/graphql-compose/graphql-compose.github.io/tree/source/docs/',
  // translationRecruitingLink: 'https://crowdin.com/project/graphql-compose',
  baseUrl: '/' /* base url for your project */,
  organizationName: 'graphql-compose',
  projectName: 'graphql-compose.github.io',
  headerLinks: [
    { doc: 'intro/quick-start', label: 'Docs' },
    { doc: 'api/ObjectTypeComposer', label: 'API' },
    { doc: 'plugins/list-of-plugins', label: 'Plugins' },
    { languages: false },
    { search: true },
    {
      href: 'https://github.com/graphql-compose/graphql-compose',
      label: 'GitHub',
    },
    // { page: 'help', label: 'Support' },
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
    secondaryColor: '#4f2284',
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
    theme: 'atom-one-light',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/graphql-compose/graphql-compose',
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',
  gaTrackingId: 'UA-83022112-3',
  algolia: {
    apiKey: '34b5c77954100fe8e57575f8dfd60185',
    indexName: 'graphql-compose',
    algoliaOptions: {
      hitsPerPage: 10,
      facetFilters: ['language:LANGUAGE', 'version:VERSION'],
    },
  },
};

module.exports = siteConfig;
