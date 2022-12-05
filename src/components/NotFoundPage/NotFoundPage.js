import './NotFoundPage.css';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found-page'>
      <h2 className='not-found-page__title'>404</h2>
      <p className='not-found-page__subtitle'>Страница не найдена:(</p>
      <p className='not-found-page__go-back-button' onClick={() => navigate(-1)}>Назад</p>
    </div>
  )
}

export default NotFoundPage;
