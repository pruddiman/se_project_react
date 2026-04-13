import "./ModalWithForm.css";
import closeIcon from "../../assets/icons/Modal_Close_Icon_X.svg";
import { useEffect } from "react";

function ModalWithForm({
  title,
  name,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
  isSubmitDisabled,
}) {
  useEffect(() => {
    if (!isOpen) return;

    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_is-opened" : ""}`}
      onClick={onClose}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose}>
          <img src={closeIcon} alt="Close Icon" className="modal__close-icon" />
        </button>

        <h3 className="modal__title">{title}</h3>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button
            className={`modal__submit ${isSubmitDisabled ? "modal__submit-disabled" : ""}`}
            disabled={isSubmitDisabled}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
