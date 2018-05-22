import Helmet from 'react-helmet';

import Layout from '../layouts/Default';
import Container from '../documentation/Container';
import PageTitle from '../patterns/PageTitle';
import ThumbFeed from '../patterns/ThumbFeed';
import Cta from '../patterns/Cta';
import Text from '../patterns/Text';

const CTA = {
  title: 'Become a partner',
  description: '<p>If your company is interested in supporting Balkan Ruby, you can learn more about the partner opportunities by following the link below.</p>',
  primaryLink: '/static/files/balkan_ruby_packages.pdf',
  primaryLabel: 'View packages',
  secondaryLink: '#',
  secondaryLabel: '',
};

export default () => (
  <Layout>
    <Helmet>
      <title>Blog | Balkan Ruby</title>
    </Helmet>

    <PageTitle title="Blog" />

    <br/>

    <Container theme="blank" spacing="spacing-bottom">
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
          </div>

          <div className="article-list">
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
          </div>

          <div className="article-list">
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

    <Container theme="purple-bg" spacing="spacing-both" id="newsletter">
      <div className="container">
        <div className="grid">
          <div className="shift-2">
            <div className="section-title">
              <h2>Subscribe for news</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <Container theme="purple-bg" spacing="none">
      <div className="newsletter">
        <form
          action="//balkanruby.us16.list-manage.com/subscribe/post?u=690a4f9d71c3a29f39792b453&amp;id=d13d0bd575"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate=""
        >
          <div className="form-group">
            <input
              type="email"
              value=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              placeholder="you@awesome.conf"
            />
          </div>
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_690a4f9d71c3a29f39792b453_d13d0bd575"
              tabIndex="-1"
              value=""
            />
          </div>
          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            className="btn-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </Container>
  </Layout>
);
