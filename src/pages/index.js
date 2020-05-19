/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import styles from './index.module.css';
import AboutMe from '../components/AboutMe/AboutMe';
import Projects from '../components/Projects/Projects';

function HomePage({ altermap, wineNote, btpn, heko }) {
  return (
    <div>
      <section className={styles.accueil}>
        <h1>Hi, I'm Antoine. Fullstack developer</h1>
      </section>
      <AboutMe />
      <Projects altermap={altermap} wineNote={wineNote} btpn={btpn} heko={heko} />
      <Link href="/contact">
        <button type="button">Contact Me</button>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const hekoRes = await fetch('http://localhost:3001/api/v1/project/1');
  const altermapRes = await fetch('http://localhost:3001/api/v1/project/2');
  const btpnRes = await fetch('http://localhost:3001/api/v1/project/3');
  const wineNoteRes = await fetch('http://localhost:3001/api/v1/project/4');
  const heko = await hekoRes.json();
  const altermap = await altermapRes.json();
  const btpn = await btpnRes.json();
  const wineNote = await wineNoteRes.json();
  return {
    props: {
      heko,
      altermap,
      btpn,
      wineNote,
    },
  };
}
export default HomePage;
