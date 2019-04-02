/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  pjax() {
    return (
      <span>
        <script src={this.props.config.baseUrl + 'js/pjax-api.js'} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.foo = new Pjax({
        areas: [
          // try to use the first query.
          '.mainContainer, .onPageNav, .docsNavContainer .toc .navWrapper',
          // fallback
          'body'
        ],
        link: '.docsNavContainer:not(.docsSliderActive) a',
        update: {
          script: false,
        }
      });

      if (document && document.addEventListener) {
        document.addEventListener('pjax:ready', function (e) {
          if (ga) ga('send', 'pageview', location.pathname);
        });
      }

      var languagesMenuItemCopy = document.getElementById("languages-menu");
      if (languagesMenuItemCopy) {
        languagesMenuItemCopy.addEventListener("click", function(e){
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        });
      }
      `,
          }}
        />
      </span>
    );
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div>{this.pjax()}</div>
        <section className="sitemap">
          <span className="nav-home" style={{ height: '1px' }} />
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('intro/quick-start.html', this.props.language)}>Get Started</a>
            <a href={this.docUrl('api/SchemaComposer.html', this.props.language)}>API Reference</a>
            <a href={this.docUrl('plugins/list-of-plugins.html', this.props.language)}>Plugins</a>
            <a href="https://graphql-compose.herokuapp.com/" target="_blank">
              Live Demo
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a> */}
            {/* <a
              href="http://stackoverflow.com/questions/tagged/type-graphql"
              target="_blank">
              Stack Overflow
            </a> */}
            <a href={this.props.config.repoUrl + '/issues'} target="_blank">
              Issues
            </a>
            <a href="https://twitter.com/nodkz" target="_blank">
              Twitter
            </a>
            <a href="https://opencollective.com/graphql-compose" target="_blank">
              Donate
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://www.npmjs.com/package/graphql-compose" target="_blank">
              NPM
            </a>
            <a href={this.props.config.repoUrl} target="_blank">
              GitHub
            </a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="copyright">
          Copyright © {new Date().getFullYear()} &nbsp;<span style={{ color: 'black' }}>🇰🇿</span>{' '}
          Pavel Chertorogov @nodkz
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
