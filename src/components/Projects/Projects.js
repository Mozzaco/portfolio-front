/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import cx from 'classnames';
import s from './Projects.module.css';

function Projects({ projects }) {
  const [displayInfo, setDisplayInfo] = useState(false);

  const handleInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  return (
    <div className={s.projects}>
      <h2>My recent works</h2>
      {projects.map((project, index) => {
        const { title } = project;
        const { mockup } = project;
        const { description } = project;
        return (
          <article key={`${title}.${index}`}>
            <img className={s.img} src={mockup} alt="blueHorizon-project" onClick={handleInfo} />
            <h2>{title}</h2>
            <p className={cx(displayInfo ? s.info : s.info__hidden)}>{description}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Projects;
