import Helmet from 'react-helmet';
import Container from '../documentation/Container';

export default () => (
  <div className="site-header-wrapper">
    <Container theme="light-bg" spacing="none">
      <div className="container">
        <div className="site-header">
          <a href="/" className="logo">
            <img src="/static/assets/balkanruby-logo.svg" alt="" className="logo" />
          </a>

          <nav className="lead-navigation">
            <a href="/speakers">Speakers</a>
            <a href="/sponsors">Partners</a>
            <a href="/tickets">Tickets</a>
          </nav>
        </div>
      </div>
    </Container>
  </div>
);
