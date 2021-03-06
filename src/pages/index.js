import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Facil de usar</>,
    imageUrl: 'img/undraw_Data_points_re_vkpq.svg',
    description: (
      <>
      Pensando para facilitar el acceso a las apis. Sin vueltas.
      </>
    ),
  },
  {
    title: <>API de transacciones</>,
     imageUrl: 'img/undraw_receipt_ecdd.svg',
    description: (
      <>
      Accede a la información de tus <code> transacciones  </code> 
      </>
    ),
	href:"docs/doc2",
  },
  {
    title: <>API de cuenta</>,
	imageUrl: 'img/undraw_Payments_re_77x0.svg',
    description: (
      <>
      Acceder a la información de tu cuenta .
      </>
    ),
	href:"docs/doc3",
  },
];

function Feature({imageUrl, title, description,href}) {
  const imgUrl = useBaseUrl(imageUrl);
  const to=useBaseUrl(href);
  return (
    <div className={classnames('col col--4', styles.feature)}>
	 <a href={to} >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
	   </a>
      <h3>{title}</h3>
      <p>{description}</p>
	  
    </div>
  
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open Banking Argentina API <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Iniciar
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
