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

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
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
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
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
    const language = this.props.language || '';
    return (
      <SplashContainer>
        {/* <Logo img_src={imgUrl('logos/red-gold-h.png')} /> */}
        <div className="inner">
          <ProjectTitle />
          { /*<PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link 2</Button>
          </PromoSection> */}
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Lower latency and cheaper data transfer costs. Trusted systems within untrusted environments. transparent, distributed, censorship-immune social platform ',
        image: imgUrl('icons/decentralized-icon.png'),
        imageAlign: 'top',
        title: 'Decentralized Network',
      },
      {
        content: 'Supporting custom localization. Boost local searches and reach a larger audience. Understand cultural peculiarities.',
        image: imgUrl('icons/lang-icon.png'),
        imageAlign: 'top',
        title: 'Multilingual',
      },
      {
        content: 'Using meachin learning service to improve user experience. Data Safety/Protects Reputation.',
        image: imgUrl('icons/ai-icon.png'),
        imageAlign: 'top',
        title: 'Artifitial Intelligence',
      },
      {
        content: 'Content fact checking. Avoid spaming and inappropriate content. ',
        image: imgUrl('icons/moderator-icon.png'),
        imageAlign: 'top',
        title: 'Social Moderator',
      },
      {
        content: 'Keep Privacy',
        image: imgUrl('icons/privacy-icon.png'),
        imageAlign: 'top',
        title: 'Decentralized Network',
      },
      {
        content: 'Decentralized Network',
        image: imgUrl('icons/secure-icon.png'),
        imageAlign: 'top',
        title: 'Secure',
      },
      {
        content: 'This is the content of my feature',
        image: imgUrl('icons/cryptocurrency-icon.png'),
        imageAlign: 'top',
        title: 'Red Gold Cryptocurrency',
      },

    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of projects</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Using meachin learning service to improve user experience. Data Safety/Protects Reputation.',
        image: imgUrl('icons/ai-icon.png'),
        imageAlign: 'right',
        title: 'Artifitial Intelligence',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Content fact checking. Avoid spaming and inappropriate content.',
        image: imgUrl('icons/moderator-icon.png'),
        imageAlign: 'left',
        title: 'Social Moderator',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'Lower latency and cheaper data transfer costs. Trusted systems within untrusted environments. transparent, distributed, censorship-immune social platform ',
        image: imgUrl('icons/decentralized-icon.png'),
        imageAlign: 'right',
        title: 'Decentralized Network',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
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
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
