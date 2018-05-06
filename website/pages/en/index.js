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
  <div>
    <Block layout="threeColumn">
      {[
        {
          title: 'Create Types',
          content: 'You may use SDL, or Type instances.',
          image: imgUrl('sdl.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Modify Types',
          content: 'Very important for Schema generation',
          image: imgUrl('modification.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Construct Models',
          content: 'TypeComposer with Resolvers',
          image: imgUrl('models.svg'),
          imageAlign: 'top',
        },
      ]}
    </Block>
    <Block layout="threeColumn">
      {[
        {
          title: 'Static Analysis',
          content: 'Includes Flowtype & TypeScript definitions',
          image: imgUrl('static_analysis.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Additional Types',
          content: 'Commonly used basic types `Date`, `JSON`',
          image: imgUrl('additional-types.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Amazing Plugins',
          content: `Plugin may generate and modify your types
          `,
          image: imgUrl('plugins.svg'),
          imageAlign: 'top',
        },
      ]}
    </Block>
  </div>
);

const Plugins = props => {
  const language = props.language || '';
  return (
    <Container padding={['bottom', 'top']} background="light">
      <div className="pluginsHeader">Amazing plugins</div>
      <div className="pluginsSubHeader">
        Thousands lines of code may be replaced just by several lines
      </div>
      <GridBlock
        className="pluginsBlock"
        contents={[
          {
            content: `Derives GraphQLType from your [mongoose](https://github.com/Automattic/mongoose) model.
              Also derives bunch of internal GraphQL Types.
              Provide convenient CRUD resolvers, including relay connection and pagination.
            `,
            imageAlign: 'left',
            image: imgUrl('logos/mongoDB.png'),
            title: `graphql-compose-mongoose`,
          },
        ]}
        layout="twoColumn"
      />
      <GridBlock
        className="pluginsBlock"
        contents={[
          {
            content: `Derives GraphQLType from your [elastic mapping](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping.html).
            Generates tons of types, provides all available methods in QueryDSL, Aggregations, Sorting
            with field autocompletion according to types in your mapping (like Dev Tools Console in Kibana).`,
            imageAlign: 'left',
            image: imgUrl('logos/elasticsearch.png'),
            title: 'graphql-compose-elasticsearch',
          },
        ]}
        layout="twoColumn"
      />
      <GridBlock
        className="pluginsBlock"
        contents={[
          {
            content: `Expose AWS Cloud API via GraphQL.
            Internally it generates Types and FieldConfigs from AWS SDK configs.
            You may put this generated types to any GraphQL Schema.
          `,
            imageAlign: 'left',
            image: imgUrl('logos/aws.png'),
            title: 'graphql-compose-aws',
          },
        ]}
        layout="twoColumn"
      />
    </Container>
  );
};

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
          <Features />
          <Plugins />
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
