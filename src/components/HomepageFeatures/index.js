import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Crónicas de viajes',
    Svg: require('@site/static/img/home-camping.svg').default,
    description: (
      <>
        Relatos de viajes en moto, rutas, fotos y experiencias por carreteras perdidas, caminos y sitios recónditos.
      </>
    ),
  },
  {
    title: 'La experiencia es un grado',
    Svg: require('@site/static/img/nooktrail-logo.svg').default,
    description: (
      <>
        Tips y recomendaciones en tus viajes. Todo tipo de quipamiento, para disfrutar de tu moto y para cuando bajes de ella.
      </>
    ),
  },
  {
    title: 'Navegación',
    Svg: require('@site/static/img/home-navegacion.svg').default,
    description: (
      <>
        Tecnologia en tus viajes... Cómo preparar tus rutas para no perder a nadie ni perderte nada.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
