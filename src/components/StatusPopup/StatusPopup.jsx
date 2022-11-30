import "./StatusPopup.css";

const StatusPopup = ({ isLoggedIn, isStatusPopupOpened }) => {
  return (
    <div
      className={`status-popup ${isStatusPopupOpened ? "status-popup_status_opened" : ""
        }`}
    >
      <div className="status-popup__container">
        <h2 className="status-popup__status">Профиль успешо обновлен</h2>
      </div>
    </div>
  );
};

export default StatusPopup;