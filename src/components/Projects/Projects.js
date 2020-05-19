/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import cx from 'classnames';
import s from './Projects.module.css';

function Projects({ altermap, wineNote, btpn, heko }) {
  const [displayInfo, setDisplayInfo] = useState(false);

  const handleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  return (
    <div className={s.projects}>
      <h2>My recent works</h2>
      <article>
        <img className={s.img} src={heko.mockup} alt="heko-project" onClick={handleInfo} />
        <h2>{heko.title}</h2>
        <p className={cx(displayInfo ? s.info : s.info__hidden)}>{heko.description}</p>
      </article>
      <article>
        <img className={s.img} src={altermap.mockup} alt="altermap-project" onClick={handleInfo} />
        <h2>{altermap.title}</h2>
        <p className={cx(displayInfo ? s.info : s.info__hidden)}>{altermap.description}</p>
      </article>
      <article>
        <img className={s.img} src={btpn.mockup} alt="btpn-project" onClick={handleInfo} />
        <h2>{btpn.title}</h2>
        <p className={cx(displayInfo ? s.info : s.info__hidden)}>{btpn.description}</p>
      </article>
      <article>
        <img className={s.img} src={wineNote.mockup} alt="Wine-Note-project" onClick={handleInfo} />
        <h2>{wineNote.title}</h2>
        <p className={cx(displayInfo ? s.info : s.info__hidden)}>{wineNote.description}</p>
      </article>
    </div>
  );
}

export default Projects;
