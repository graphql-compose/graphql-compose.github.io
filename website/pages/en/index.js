/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
    <small style={{ color: 'red', fontSize: '30%' }}>Docs in progress. Unready articles marked as [WIP]. This page also should be prettified.</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('logo.png')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('intro-quick-start.html', language)}>Get Started</Button>
            <Button href={docUrl('api-TypeComposer.html', language)}>API</Button>
            <Button href={docUrl('plugin--list.html', language)}>Plugins</Button>
            {/* <Button href="#try">Try It Out</Button> */}
            {/* <Button href={docUrl('requirements.html', language)}>Example Link</Button> */}
            {/* <Button href={docUrl('doc2.html', language)}>Example Link 2</Button> */}
          </PromoSection>
          <a
            className="github-button"
            href={siteConfig.repoUrl}
            data-icon="octicon-star"
            data-count-href="/facebook/docusaurus/stargazers"
            data-show-count={true}
            data-count-aria-label="# stargazers on GitHub"
            aria-label="Star this project on GitHub"
          >
            Star
          </a>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const FeatureCallout = props => {
  const language = props.language || '';
  return (
    <div>
      <div className="productShowcaseSection" style={{ textAlign: 'center' }}>
        <h2>
          graphql-compose
          <br/>
          <small>— imperative tool built on top of graphql-js</small>
        </h2>
        <MarkdownBlock>
          It provides useful methods for creating `GraphQL Types` and `GraphQL Models` (type with a list of
          resolvers) for further building of complex relations in your `Schema`.
          With graphql-compose you may quickly write your own functions/generators for common tasks.
        </MarkdownBlock>

        <div className="leftCentredBlock">
          <ul style={{ listStyleType: 'disc' }}>
            <li>provides methods for editing GraphQL Types (add/remove/extend fields, args, interfaces)</li>
            <li>introduces `Resolver`s – the named graphql fieldConfig, which can be extended, wrapped and used in several places of your schema</li>
            <li>provides an easy way for creating relations between types via `Resolver`s</li>
            <li>provides converter from `OutputType` to `InputType`</li>
            <li>provides `projection` parser from AST for your Resolver methods</li>
            <li>provides `GraphQL Schema Language` for defining simple types</li>
            <li>allows to solve hoisting problems in a more convenient way</li>
            <li>adds additional types `Date`, `Json`</li>
          </ul>
        </div>
      </div>

      <div className="productShowcaseSection mTop20 paddingBottom" style={{ textAlign: 'center' }}>
        <h2>
          graphql-compose-[plugin]
          <br/>
          <small>— the declarative generator/utility built on top of `graphql-compose`</small>
        </h2>
        <MarkdownBlock>
          Plugin takes some ORMs, schema definitions and creates GraphQL Models from them or modifies existed GraphQL Types.
        </MarkdownBlock>

        <div className="leftCentredBlock mTop20">
          <h3>Type generator plugins:</h3>
          <ul style={{ listStyleType: 'disc' }}>
            <li>
              <a href={docUrl('plugin-json.html', language)}>graphql-compose-json</a>
              {' '}
              generates GraphQL types from JSON (a good helper for wrapping REST APIs)
            </li>
            <li>
              <a href={docUrl('plugin-mongoose.html', language)}>graphql-compose-mongoose</a>
              {' '}
              generates GraphQL types from mongoose (MongoDB models) with Resolvers
            </li>
            <li>
              <a href={docUrl('plugin-elasticsearch.html', language)}>graphql-compose-elasticsearch</a>
              {' '}
              generates GraphQL types from elastic mappings; ElasticSearch REST API proxy via GraphQL
            </li>
            <li>
              <a href={docUrl('plugin-aws.html', language)}>graphql-compose-aws</a>
              {' '}
              expose AWS Cloud API via GraphQL
            </li>
          </ul>
        </div>

        <div className="leftCentredBlock mTop20">
          <h3>Utility plugins:</h3>
          <ul style={{ listStyleType: 'disc' }}>
            <li>
              <a href={docUrl('plugin-relay.html', language)}>graphql-compose-relay</a>
              {' '}
              modifies your Types and Resolvers making them compatible with Relay
            </li>
            <li>
              <a href={docUrl('plugin-connection.html', language)}>graphql-compose-connection</a>
              {' '}
              generates `connection` Resolver from `findMany` and `count` Resolvers.
            </li>
            <li>
              <a href={docUrl('plugin-pagination.html', language)}>graphql-compose-pagination</a>
              {' '}
              generates `pagination` Resolver from `findMany` and `count` Resolvers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content:
          'GraphQL is a query language for APIs. graphql-js is the reference implementation of GraphQL for nodejs which introduces GraphQL type system for describing schemas (definition over configuration) and executes queries on the server side. express-graphql is a HTTP server which gets the request data, passes it to graphql-js and passes the returned result to response.',
        image: imgUrl('logo.png'),
        imageAlign: 'left',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <FeatureCallout />
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
