import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg"
            to="/docs/intro"
            style={{ 
              marginRight: '1rem',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none'
            }}>
            説明書 📖
          </Link>
          <Link
            className="button button--lg"
            to="https://kurotori.booth.pm/"
            style={{ 
              backgroundColor: '#1e40af',
              color: 'white',
              border: 'none'
            }}>
            BOOTH 🛒
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="VRChatワールドマスコットシステムのドキュメント">
      <HomepageHeader />
    </Layout>
  );
}
