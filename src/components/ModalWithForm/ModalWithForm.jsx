import "./ModalWithForm.css";
import { useEffect } from "react";

function ModalWithForm({
  title,
  name,
  buttonText,
  children,
  isOpen,
  onClose,
  onSubmit,
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
      onClick={onClose} // closes when clicking overlay
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} />

        <h3 className="modal__title">{title}</h3>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}

          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
