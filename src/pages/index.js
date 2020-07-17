/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styles from './index.module.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

function HomePage({ projects }) {
  return (
    <div>
      <section className={styles.accueil}>
        <h1>Hi, I'm Antoine. Fullstack developer</h1>
      </section>
      <AboutMe />
      <Projects projects={projects} />
      <Link href="/contact">
        <button type="button">Contact Me</button>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3001/api/v1/project/');
  const projects = await data.json();

  return {
    props: {
      projects,
    },
  };
}
export default HomePage;
