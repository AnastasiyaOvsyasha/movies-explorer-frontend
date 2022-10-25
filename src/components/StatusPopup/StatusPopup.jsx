import './StatusPopup.css';
import Logo from '../Logo/Logo';

const StatusPopup = () => {
  return (
    <div className='status-popup'>
      <div className='status-popup__container'>
        <Logo />
        <h2 className='status-popup__status'>Статус</h2>
        <p className='status-popup__message-error'>Текст ошибки</p>
        <button className='status-popup__button' type='button'>Попробовать еще раз</button>
      </div>
    </div>
  )
}

export default StatusPopup;