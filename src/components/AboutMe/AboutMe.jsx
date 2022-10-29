import './AboutMe.css';
import Photo from '../../images/AboutMe.jpg';

const AboutMe = () => {
  return (
    <section className='about-me' id='aboutme'>
      <h2 className='about-me__student'>Студент</h2>
      <div className='about-me__profile'>
        <div className='about-me__textunit'>
          <h3 className='about-me__title'>Анастасия</h3>
          <p className='about-me__subtitle'>Переводчик-лингвист, 25 лет</p>
          <p className='about-me__text'>Я живу в Московской области, в городе Одинцово. Заканчиваю курс "Веб-разработчик" от Яндекс.Практикум. Работаю на фрилансе, получая 200 000 тысяч ежемесячно. Хочу начать рабоатать с китайцами backend-разработчиком</p>
          <a className='about-me__profilegithab' href='https://github.com/AnastasiyaOvsyasha' target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className='about-me__img' src={Photo} alt='Фото Федотовой Анастасии' />
      </div>
    </section>

  )
}

export default AboutMe;