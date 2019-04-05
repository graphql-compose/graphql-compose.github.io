/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const backers = require(process.cwd() + '/backers.json');
const contributors = require(process.cwd() + '/contributors.json');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function svgUrl(img) {
  return siteConfig.baseUrl + 'svg/' + img;
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
        <a className="button buttonDark" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = (props) => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = (props) => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = (props) => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = (props) => (
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
        {/* <Logo img_src={imgUrl('logo.png')} /> */}
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('intro/quick-start.html', language)}>Get Started</Button>
            <Button href={docUrl('api/SchemaComposer.html', language)}>API</Button>
            <Button href={docUrl('plugins/list-of-plugins.html', language)}>Plugins</Button>
            <Button href="https://graphql-compose.herokuapp.com/" target="_blank">
              Live Demo
            </Button>
            {/* <Button href="#try">Try It Out</Button> */}
            {/* <Button href={docUrl('requirements.html', language)}>Example Link</Button> */}
          </PromoSection>
          <a href="https://www.npmjs.com/package/graphql-compose" target="_blank">
            <img src="https://img.shields.io/npm/dw/graphql-compose.svg?style=social" />
          </a>
          &nbsp;&nbsp;&nbsp;
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

const Block = (props) => (
  <Container padding={['bottom']} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = (props) => (
  <div>
    <Block layout="threeColumn">
      {[
        {
          title: 'Create Types',
          content: 'Fast and convenient with SDL or Type instances',
          image: svgUrl('sdl.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Edit Types',
          content: 'Generate Types and modify them for better form',
          image: svgUrl('modification.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Type Registry',
          content: 'All created types avaliable in SchemaComposer storage',
          image: svgUrl('type-storage.svg'),
          imageAlign: 'top',
        },
      ]}
    </Block>
    <Block layout="threeColumn">
      {[
        {
          title: 'Static Analysis',
          content: 'Includes Flowtype & TypeScript definitions',
          image: svgUrl('static_analysis.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Amazing Plugins',
          content: `Plugin may generate and modify your types
          `,
          image: svgUrl('plugins.svg'),
          imageAlign: 'top',
        },
        {
          title: 'Additional Types',
          content: 'Commonly used basic types `Date`, `JSON`',
          image: svgUrl('additional-types.svg'),
          imageAlign: 'top',
        },
      ]}
    </Block>
  </div>
);

const TypeCreation = (props) => {
  const language = props.language || '';
  return (
    <Container padding={['bottom', 'top']} background="light">
      <div className="pluginsHeader">Type creation</div>
      <div>
        <div className="editor-window">
          <div className="editor-menubar">
            <span className="editor-button close" />
            <span className="editor-button minimize" />
            <span className="editor-button maximize" />
            <span className="editor-filename">AuthorTC.js</span>
          </div>
          <MarkdownBlock
            children={`
\`\`\`js
import { schemaComposer } from 'graphql-compose';

const AuthorTC = schemaComposer.createObjectTC({
  posts: {
    // wrapping Type with arrow function helps to solve a hoisting problem
    // also using type instances provides better DX
    // (ctrl+click allows to jump to PostTC type declaration in your IDE)
    type: () => PostTC,
    description: 'Posts written by Author',
    resolve: (source, args, context, info) => {},
  },
  // using standard GraphQL Type
  ucFirstName: {
    type: GraphQLString,
    resolve: (source) => { return source.firstName.toUpperCase(); },
    // also request \`firstName\` field which must be loaded from database
    projection: { firstName: true },
  },
  // fast way if you need to define only type
  counter: 'Int',
  // using SDL for definition new ObjectType
  complex: \`type ComplexType {
    subField1: String
    subField2: Float
    subField3: Boolean
    subField4: ID
    subField5: JSON
    subField6: Date
  }\`,
  // SDL for defining array of strings, which is NonNull
  list0: {
    type: '[String]!',
    description: 'Array of strings',
  },
  list1: '[String]',
  list2: ['String'],
  list3: [GraphQLString],
  list4: [\`type Complex2Type { f1: Float, f2: Int }\`],
});
\`\`\`         
          `}
          />
        </div>

        <div className="pluginsSubFooter">
          <MarkdownBlock>
            More details about type creation you can find in the following
            [article](./basics/understanding-types.html).
          </MarkdownBlock>
        </div>
      </div>
    </Container>
  );
};

const MigrateFromGraphQLTools = (props) => {
  const language = props.language || '';
  return (
    <Container padding={['top', 'bottom']}>
      <div className="pluginsHeader">Migration from graphql-tools</div>
      <div>
        <div className="editor-window">
          <div className="editor-menubar">
            <span className="editor-button close" />
            <span className="editor-button minimize" />
            <span className="editor-button maximize" />
            <span className="editor-filename">schema.js</span>
          </div>
          <MarkdownBlock
            children={`
\`\`\`diff
- import { makeExecutableSchema } from 'graphql-tools';
+ import { schemaComposer } from 'graphql-compose';

- export const schema = makeExecutableSchema({
-  typeDefs,
-  resolvers,
- });

+ schemaComposer.addTypeDefs(typeDefs);
+ schemaComposer.addResolveMethods(resolvers);

+ export const schema = schemaComposer.buildSchema();
\`\`\`         
          `}
          />
        </div>

        <div className="pluginsSubFooter">
          <MarkdownBlock>
            Graphql-compose allows to call `addTypeDefs()` and `addResolveMethods()` as many times
            as you need, before you call `buildSchema()`.
          </MarkdownBlock>
        </div>
      </div>
    </Container>
  );
};

const Plugins = (props) => {
  const language = props.language || '';
  return (
    <Container padding={['top', 'bottom']} background="light">
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

const Showcase = (props) => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter((user) => {
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
    <div className="productShowcaseSection paddingTop paddingBottom" style={{ paddingTop: 60 }}>
      <div className="pluginsHeader">Who's using graphql-compose?</div>
      <div className="logos">{showcase}</div>
      {siteConfig.users.length > 5 ? (
        <div className="more-users">
          <a className="button" href={pageUrl('users.html', props.language)}>
            More {siteConfig.title} Users
          </a>
        </div>
      ) : (
        <div className="more-users">
          <a href="https://github.com/graphql-compose/graphql-compose.github.io/edit/source/website/users.js">
            Add your logo
          </a>
        </div>
      )}
    </div>
  );
};

const OpenCollectiveBacker = (b) => {
  return (
    <a
      className={`${b.classPrefix}-item`}
      title={`$${b.totalDonations / 100} by ${b.name || b.slug}`}
      target="_blank"
      href={b.website || `https://opencollective.com/${b.slug}`}
    >
      {b.avatar ? (
        <img
          className={`${b.classPrefix}-avatar`}
          src={b.avatar + '&width=96'}
          alt={b.name || b.slug ? `${b.name || b.slug}'s avatar` : 'avatar'}
        />
      ) : (
        <span className={'fallbackAvatarName'}>{b.name || b.slug}</span>
      )}
    </a>
  );
};

const OpenCollective = (props) => {
  const sortedBackers = backers.sort((a, b) => (a.totalDonations > b.totalDonations ? -1 : 1));
  const filteredBackers = sortedBackers.filter(
    (b) => b.tier === 'backer' && !b.slug.includes('adult')
  );
  const filteredSponsors = sortedBackers.filter((b) => b.tier === 'sponsor');

  return (
    <div className="opencollective lightBackground">
      <div className="pluginsHeader">Backers & Sponsors</div>
      <div>
        <Button href="https://opencollective.com/graphql-compose">Donate</Button>

        {filteredSponsors.length > 0 && (
          <React.Fragment>
            <h3>
              <span>Sponsors</span>
            </h3>
            <p>
              <span>Sponsors are those who contribute $100 or more per month</span>
            </p>
            <div>
              {filteredSponsors.map((b, i) => (
                <OpenCollectiveBacker key={i} {...b} classPrefix="sponsor" />
              ))}
            </div>
          </React.Fragment>
        )}

        {filteredBackers.length > 0 && (
          <React.Fragment>
            <h3>
              <span>Backers</span>
            </h3>
            <p>
              <span>Backers are those who contribute $2 or more per month</span>
            </p>
            <div>
              {filteredBackers.map((b, i) => (
                <OpenCollectiveBacker key={i} {...b} classPrefix="backer" />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const ContributorAvatar = ({ author = {}, lastContribution, total }) => {
  return (
    <a
      className={`contributor-item`}
      title={`${author.login} made ${total} commit${
        total > 1 ? 's' : ''
      }. Last commit was ${new Date(lastContribution * 1000).toDateString()}`}
      target="_blank"
      href={`https://github.com/graphql-compose/graphql-compose/commits?author=${author.login}`}
    >
      <img className="contributor-avatar" src={author.avatar_url} alt={author.login} />
    </a>
  );
};

const Contributors = (props) => {
  const sortedContributors = contributors
    .map((o) => {
      // add one day per commit
      o.score = o.lastContribution + o.total * 86400;
      return o;
    })
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  return (
    <div className="contributors">
      <div className="pluginsHeader">Contributors</div>
      <div>
        {sortedContributors.length > 0 && (
          <React.Fragment>
            <div>
              {sortedContributors.map((data, i) => (
                <ContributorAvatar key={i} {...data} />
              ))}
            </div>
          </React.Fragment>
        )}
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
          <TypeCreation />
          <MigrateFromGraphQLTools />
          <Plugins />
          {/* <Description /> */}
          <Showcase language={language} />
          <OpenCollective />
          <Contributors />
        </div>
      </div>
    );
  }
}

module.exports = Index;
