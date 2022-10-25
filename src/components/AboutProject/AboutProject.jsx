import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project' id='aboutproject'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__list'>
        <li className='about-project__item'>
          <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-project__item'>
          <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__time-line'>
        <div className='about-project__time-line_first'>
          <p className='about-project__time_type_short'>1 неделя</p>
          <p className='about-project__time-line_taskbek'>Back-end</p>
        </div>
        <div className='about-project__time-line_second'>
          <p className='about-project__time_type_long'>4 недели</p>
          <p className='about-project__time-line_taskfront'>Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;