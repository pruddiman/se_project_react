import "./Sidebar.css";
import fallbackAvatar from "../../assets/avatars/fallback_avatar.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <img
          src={fallbackAvatar}
          alt="User avatar"
          className="sidebar__avatar"
        />
        <p className="sidebar__name">Philip Ruddiman</p>
      </div>
    </div>
  );
}

export default Sidebar;
