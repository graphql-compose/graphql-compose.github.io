#!/usr/bin/env node

// Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.

const fs = require('fs');
const request = require('request');
const path = require('path');

const REQUIRED_KEYS = ['total', 'author'];

const BLACKLIST = [
  23040076, // 'greenkeeper[bot]',
  14790466, // 'greenkeeperio-bot',
];

request(
  {
    url: 'https://api.github.com/repos/graphql-compose/graphql-compose/stats/contributors',
    headers: {
      'User-Agent': 'request contributors for https://graphql-compose.github.io/',
    },
  },
  (err, response, body) => {
    if (err) console.error('Failed to fetch contributors: ', err);

    // Basic validation
    let content = JSON.parse(body);

    if (!Array.isArray(content)) throw new Error('contributors info is not an array');

    for (const item of content) {
      for (const key of REQUIRED_KEYS) {
        if (!item || typeof item !== 'object')
          throw new Error(`contributors info item (${JSON.stringify(item)} is not an object`);
        if (!(key in item))
          throw new Error(`contributors info item (${JSON.stringify(item)} doesn't include ${key}`);
      }
      if (item.weeks) {
        lastContribution = 0;
        if (Array.isArray(item.weeks)) {
          item.weeks.forEach((data) => {
            if (data.a + data.d + data.c > 0 && data.w > lastContribution) {
              lastContribution = data.w;
            }
          });
        }
        item.lastContribution = lastContribution;
        delete item.weeks;
      }
    }

    content = content.filter((item) => {
      return !(item.author && (BLACKLIST.includes(item.author.id) || item.author.type === 'Bot'));
    });

    fs.writeFile(
      path.resolve(__dirname, 'contributors.json'),
      JSON.stringify(content, null, 2) + '\n',
      (err) => {
        if (err) {
          console.error('Failed to write contributors file: ', err);
        } else console.log('Fetched 1 file: contributors.json');
      }
    );
  }
);
