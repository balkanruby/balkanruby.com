import Layout from '../layouts/Darkside';
import Container from '../documentation/Container';
import ArticleList from '../patterns/ArticleList';
import LeadImageDark from '../patterns/LeadImageDark';
import Text from '../patterns/Text';
import SectionTitle from '../patterns/SectionTitle';
import Speakers from '../patterns/Speakers';
import Navigation from '../patterns/Navigation';
import PartnerLogos from '../patterns/PartnerLogos';
import Cta from '../patterns/Cta';
import Heading from '../patterns/Heading';
import store from '../store';

const NAV = {
  list: [
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

const CFP = {
  title: 'Call for Papers',
  description: '<p>Are you interested in speaking besides Arron and Eileen? Our CFP is open until 14th of February!</p>',
  primaryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeJszd7yDYk_DQdVN4XqvQ5zVVrKzgJAAENN0m7Hz-6UxzHpQ/viewform',
  primaryLabel: 'Apply for CFP',
  secondaryLink: '#',
  secondaryLabel: '',
};

const Videos = {
  title: 'Videos',
  description: '<p>Did you miss 2018? Here is a playlist with all the videos from our 2018 edition!</p>',
  primaryLink: 'https://www.youtube.com/playlist?list=PLAkGYJoUfB0v4ssiPcL_OIM1-t_LssfAY',
  primaryLabel: '2018 Videos',
  secondaryLink: '#',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Container theme="blank" spacing="none">
      <div className="lead-header">
        <div className="hero">
          <img src="/static/assets/balkanruby-header-logo.svg" alt="Balkan Ruby" className="logo" />
          <p>17–18 May 2019; Sofia, Bulgaria</p>
          <a href="/tickets" className="btn-primary lg">Tickets</a>
        </div>

        <div className="video-container">
          <video autoPlay loop poster="/static/images/landing-video/Wall-Sketching.jpg">
            <source src="/static/images/landing-video/Wall-Sketching.mp4" type="video/mp4" />
            <source src="/static/images/landing-video/Wall-Sketching.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </Container>

    <Heading theme="yellow-bg" name="Speakers" />

    <Container theme="yellow-bg" spacing="spacing-bottom">
      <Speakers list={store.speakers} />
    </Container>

    <Container theme="yellow-bg" spacing="spacing-bottom">
      <Cta {...CFP} />
    </Container>

    <Container theme="blue-bg" spacing="spacing-bottom">
      <Cta {...Videos} />
    </Container>
  </Layout>
);
