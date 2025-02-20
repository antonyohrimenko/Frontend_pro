import "./profilecard.css";

function ProfileCard({ avatar, firstName, lastName, occupation, hobby }) {
  return (
    <div className="profile-card">
      <img className="profile-image" src={avatar} alt="Profile" />
      <div className="profile-info">
        <p className="profile-info-title">Имя:</p>
        <p className="profile-info-text">{firstName}</p>
      </div>
      <div className="profile-info">
        <p className="profile-info-title">Фамилия:</p>
        <p className="profile-info-text">{lastName}</p>
      </div>
      <div className="profile-info">
        <p className="profile-info-title">Род деятельности:</p>
        <p className="profile-info-text">{occupation}</p>
      </div>
      <div className="profile-info">
        <p className="profile-info-title">Хобби:</p>
        <p className="profile-info-text">{hobby}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
