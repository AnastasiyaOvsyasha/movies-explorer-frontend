import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link-text' href='https://github.com/AnastasiyaOvsyasha/how-to-learn.git' target='_blank' rel="noreferrer">Статичный сайт
            <div className='portfolio__icon'></div>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link-text' href='https://github.com/AnastasiyaOvsyasha/russian-travel.git' target='_blank' rel="noreferrer">Адаптивный сайт
            <div className='portfolio__icon'></div>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link-text' href='https://github.com/AnastasiyaOvsyasha/mesto-react.git' target='_blank' rel="noreferrer">Одностраничное приложение
            <div className='portfolio__icon'></div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;