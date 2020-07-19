/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import cx from 'classnames';
import s from './Projects.module.css';

function Projects({ projects }) {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleInfo = (id) => () => {
    setDisplayInfo(!displayInfo);
    setCurrentId(id);
  };

  return (
    <div className={s.projects}>
      <h2>My recent works</h2>
      {projects.map((project) => {
        const { title } = project;
        const { mockup } = project;
        const { description } = project;
        const { id } = project;
        return (
          <article key={id}>
            <img className={s.img} src={mockup} alt={`${title}-project`} onClick={handleInfo(id)} />
            <div className={cx(displayInfo && currentId === id ? s.info : s.info__hidden)}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Projects;
