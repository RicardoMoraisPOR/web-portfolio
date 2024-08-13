import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const MetaTag: FC = () => {
  const location = useLocation();
  const canonicalUrl = `https://www.yourwebsite.com${location.pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default MetaTag;
