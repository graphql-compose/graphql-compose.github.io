/* eslint-disable */

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} versions</h1>
          </header>

          <h3 id="latest">Latest version</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>next</th>
                <td>
                  <a href={`${siteConfig.baseUrl}docs/en/next/intro/quick-start.html`}>
                    Documentation
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <h3 id="latest">Stable version</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href={`${siteConfig.baseUrl}docs/en/intro/quick-start.html`}>Documentation</a>
                </td>
                <td>
                  <a
                    href={`https://github.com/graphql-compose/graphql-compose/releases/tag/v${latestVersion}`}
                  >
                    Release Notes
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Other text describing this section.</p>
          <h3 id="archive">Past Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                (version) =>
                  version !== latestVersion && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        <a href={`${siteConfig.baseUrl}docs/en/${version}/intro/quick-start.html`}>
                          Documentation
                        </a>
                      </td>
                      <td>
                        <a
                          href={`https://github.com/graphql-compose/graphql-compose/releases/tag/v${latestVersion}`}
                        >
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <p>
            You can find past versions of this project on <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
