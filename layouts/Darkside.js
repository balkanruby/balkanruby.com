import Helmet from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import Newsletter from '../patterns/Newsletter';

export default ({ children }) => (
  <div className="darkside">
    <Helmet>
      <title>Balkan Ruby – 17-18 May, 2019 – Sofia, Bulgaria</title>
      <meta name="description" content="Brand new conference about Ruby and satellite technologies. Visit Sofia, Bulgaria and meet like-minded Ruby developers from all over Europe." />
    </Helmet>

    <Header />
    {children}
    <Newsletter />
    <Footer />
  </div>
);
