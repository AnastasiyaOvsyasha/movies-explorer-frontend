import './Profile.css';

const Profile = ({ handleLogout }) => {

  const handleCLickLogout = () => {
    handleLogout()
  }

  return (
    <div className='profile__form-body'>
      <h2>Привет, Анастасия!</h2>
      <div className='profile__form-username'>
        <p className='profile__form-title'>Имя</p>
        <p className='profile__form-value'>Анастасия</p>
      </div>
      <div className='profile__email'>
        <p className='profile__form-title'>E-mail</p>
        <p className='profile__form-value'>nastenaf@list.ru</p>
      </div>
      <button className='profile__btn_type_edit' type='button'>Редактировать</button>
      <button className='profile__button-logout' type='button' onClick={handleCLickLogout}>Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;