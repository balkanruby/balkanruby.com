import Helmet from 'react-helmet';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Helmet>
      <title>Balkan Ruby – 17-18 May, Sofia Bulgaria</title>
      <meta name="description" content="Brand new conference about Ruby and satellite technologies. Visit Sofia, Bulgaria and meet like-minded Ruby developers from all over Europe." />
    </Helmet>

    {children}
    <Footer />
  </div>
);
