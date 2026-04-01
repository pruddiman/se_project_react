import "./Header.css";

function Header({ onAddClothes }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <img src="/logo.svg" alt="WTWR logo" className="header__logo" />
        <p className="header__date-location">{currentDate}, Location</p>
      </div>

      <div className="header__right">
        <button className="header__add-clothes" onClick={onAddClothes}>
          + Add Clothes
        </button>

        <div className="header__user-info">
          <p className="header__username">Philip</p>
          <img src="/avatar.png" alt="User avatar" className="header__avatar" />
        </div>
      </div>
    </header>
  );
}

export default Header;
