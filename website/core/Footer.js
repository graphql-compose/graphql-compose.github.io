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
    return (<span>
      <script src={this.props.config.baseUrl + 'js/pjax-api.js'}></script>
      <script dangerouslySetInnerHTML={{__html: `window.foo = new Pjax({
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
      languagesMenuItemCopy.addEventListener("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      });`}}></script>
    </span>);
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <div>
        {this.pjax()}
      </div>
    );
  }
}

module.exports = Footer;
