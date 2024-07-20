import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contribution based',
    Svg: require('@site/static/img/undraw_team_effort.svg').default,
    description: (
      <>
        A wiki built by the community, for the community.
      </>
    ),
  },
  {
    title: 'Built-in search',
    Svg: require('@site/static/img/undraw_search_engines_nmxe.svg').default,
    description: (
      <>
        Using Algoria, Find what you need with our powerful search.
      </>
    ),
  },
  {
    title: 'Focused on neutral knownledge',
    Svg: require('@site/static/img/undraw_website_u6x8.svg').default,
    description: (
      <>
        Dive deep into comprehensive knowledge. Explore interconnected topics, all presented with accuracy and objectivity.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
