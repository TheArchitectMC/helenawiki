import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';
 
inject();
injectSpeedInsights();

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

<div style={{backgroundColor: 'violet', padding: '1rem'}}>
  Try and change the background color to `tomato`.
</div>

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="About Helena's wiki<head />">
      <HomepageHeader />
      <main>
        
      <div className={styles.faded}>
        <section className="home">
          <img src="./img/test-min.png" width="auto" height="auto"/>
            <div className="home__container">
              <h1>Get informed on stuff?</h1>
              <h3>we've got you corvered!</h3>
            </div>
          <div className={styles.title}>Centered</div>
          </section>
        </div>
      </main>
    </Layout>
  );
}