import "./Header.css";
import logo from "../../assets/logos/wtwrlogo.svg";
import fallbackAvatar from "../../assets/avatars/fallback_avatar.svg";

function Header({ onAddClothes, city }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__date-location">
          {currentDate}, {city || "Location"}
        </p>
      </div>

      <div className="header__right">
        <button className="header__add-clothes" onClick={onAddClothes}>
          + Add Clothes
        </button>
      </div>

      <div className="header__user-info">
        <p className="header__username">Philip Ruddiman</p>

        <div className="header__avatar">
          <img
            src={fallbackAvatar}
            alt="User avatar"
            className="header__avatar-img"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
