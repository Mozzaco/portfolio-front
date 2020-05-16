/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import styles from './index.module.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

function HomePage() {
  return (
    <div>
      <section className={styles.accueil}>
        <h1>Hi, I'm Antoine. Fullstack developer</h1>
      </section>
      <AboutMe />
      <Projects />
      <Link href="/contact">
        <button type="button">Contact Me</button>
      </Link>
    </div>
  );
}

export default HomePage;
