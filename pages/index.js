import Layout from '../layouts/Landing';
import Container from '../documentation/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';
import Speakers from '../patterns/Speakers';
import Navigation from '../patterns/Navigation';
import Newsletter from '../patterns/Newsletter';
import PartnerLogos from '../patterns/PartnerLogos';
import Heading from '../patterns/Heading';
import Schedule from '../patterns/Schedule';
import store from '../store';
import schedule from '../schedule';

const NAV = {
  list: [
    {
      label: 'Schedule',
      link: '/schedule',
    },
    {
      label: 'Speakers',
      link: '/speakers',
    },
    {
      label: 'Partners',
      link: '/sponsors',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
    {
      label: 'Venue',
      link: '/blog/introducing-generator',
    }
  ],
};

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="lead-header">
        <div className="hero">
          <img src="/static/assets/balkanruby-header-logo.svg" alt="Balkan Ruby" className="logo" />
          <p>25 – 26 May 2018; Sofia, Bulgaria</p>
          <button disabled className="btn-primary lg">SOLD OUT</button>
        </div>

        <div className="video-container">
          <video autoPlay loop poster="/static/images/landing-video/Wall-Sketching.jpg">
            <source src="/static/images/landing-video/Wall-Sketching.mp4" type="video/mp4" />
            <source src="/static/images/landing-video/Wall-Sketching.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </Container>

    <Container theme="light-bg" spacing="none">
      <Navigation {...NAV} />
    </Container>

    <Heading name="Schedule" />

    <Container theme="blank" spacing="spacing-both">
      <Schedule list={schedule} />
    </Container>

    <Heading name="Speakers" />

    <br/>

    <Container theme="blank" spacing="spacing-bottom">
      <Speakers list={store.speakers} />
    </Container>

    <Container theme="light-bg" spacing="spacing-bottom">
      <Heading name="Blog" />

      <div className="container">
        <div className="grid">
          <div className="article-list">
            <div className="article">
              <h3>
                <a href="/blog/welcome-to-sofia">Welcome to Sofia</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/SvetlioMihailov" target="_blank">
                  Svetlozar
                </a>
              </div>
              <p>
                Balkan Ruby is this Friday and we want to welcome you late spring Sofia!
                We're going to talk about the local currency, how to get to the venue and sightseeing in Sofia.
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/community-tickets">Community Tickets</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/gsamokovarov" target="_blank">
                  Genadi
                </a>
              </div>
              <p>
                We may be sold out, but we have saved a few tickets to give away for free!
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/introducing-generator">The Venue</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/vestimir" target="_blank">
                  Vestimir
                </a>
              </div>
              <p>
                Today we are excited to reveal the venue for Balkan Ruby! The
                conference will be held on 25th and 26th of May at Generator
                Sofia.
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/cfp-time">CFP Time</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/gsamokovarov" target="_blank">
                  Genadi
                </a>
              </div>
              <p>
                The Balkans are such a nice place to be and we can help you get
                here for free through our <a href="https://goo.gl/forms/uvxE2CR7I3fwYCtl2" targe="_blank">Call for Papers</a>!
              </p>
            </div>

            <div className="article">
              <h3>
                <a href="/blog/announcement">Introducing Balkan Ruby</a>
              </h3>
              <div className="meta">
                by{' '}
                <a href="https://twitter.com/gsamokovarov" target="_blank">
                  Genadi
                </a>
              </div>
              <p>
                Meet Balkan Ruby, an event not just for Bulgaria, but the whole
                Balkan region. With it, we aim to introduce the local
                communities to each other and invite developers from all over
                Europe to come, share and exchange ideas with us. The dates are
                25th and 26th of May 2018, the city – Sofia, Bulgaria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Heading name="Partners" />

    <Container theme="blank" spacing="spacing-both">
      <PartnerLogos list={store.sponsors.pro} />
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <PartnerLogos list={store.sponsors.standard} />
    </Container>

    <Container theme="blank" spacing="spacing-top">
      <Text centered text="<h3>Thanks to</h3>" />
    </Container>

    <Container theme="blank" spacing="spacing-both">
      <PartnerLogos list={store.sponsors.speaker} />
    </Container>
  </Layout>
);
