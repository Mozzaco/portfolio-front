import React, { useState } from 'react';
import cx from 'classnames';
import s from './Projects.module.css';

function Projects() {
  const [displayInfo, setDisplayInfo] = useState(false);

  const handleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  return (
    <div className={s.projects}>
      <h2>My recent works</h2>
      <img className={s.img} src="/wine-note-2.png" alt="wine-note-project" onClick={handleInfo} />
      <p className={cx(displayInfo ? s.info : s.info__hidden)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium perferendis
        nesciunt amet repudiandae veniam ullam aspernatur illum rerum minus.
      </p>
    </div>
  );
}

export default Projects;
