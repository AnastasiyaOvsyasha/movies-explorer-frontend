import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link-text' href='#!' target='_blank'>Статичный сайт</a>
          <div className='portfolio__icon'></div>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link-text' href='#!' target='_blank'>Адаптивный сайт</a>
          <div className='portfolio__icon'></div>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link-text' href='#!' target='_blank'>Одностраничное приложение</a>
          <div className='portfolio__icon'></div>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;