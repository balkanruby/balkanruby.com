import Helmet from 'react-helmet';

import Layout from '../layouts/Darkside';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import PartnerFeed from '../patterns/PartnerFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';
import PartnerLogos from '../patterns/PartnerLogos';
import Newsletter from '../patterns/Newsletter';

import store from '../store.js';

const Sponsorship = {
  title: 'Become a partner',
  description: '<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>',
  primaryLink: '/static/files/balkan_ruby_packages.pdf',
  primaryLabel: 'View packages',
  secondaryLink: '#',
  secondaryLabel: '',
};

const Videos = {
  title: 'Videos',
  description: '<p>Wondering if Balkan is the event for you? Check-out our 2018 videos and join emerchantpay, Receipt Bank, Catawiki, Funding Circle & Strypes!</p>',
  primaryLink: 'https://www.youtube.com/playlist?list=PLAkGYJoUfB0v4ssiPcL_OIM1-t_LssfAY',
  primaryLabel: '2018 Videos',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Partners | Balkan Ruby</title>
    </Helmet>

    <PageTitle theme="light-bg" title="Partners" />

    <Container theme="light-bg" spacing="spacing-both">
      <Cta {...Sponsorship} />
    </Container>

    <Container theme="blue-bg" spacing="spacing-both">
      <Cta {...Videos} />
    </Container>
  </Layout>
);
