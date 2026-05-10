import "./Profile.css";
import Sidebar from "./Sidebar.jsx";
import ClothesSection from "./ClothesSection.jsx";

function Profile({ clothingItems, onCardClick, onAddItem }) {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile-page__content-wrapper">
        <ClothesSection
          clothingItems={clothingItems}
          onCardClick={onCardClick}
          onAddItem={onAddItem}
        />
      </div>
    </div>
  );
}

export default Profile;
