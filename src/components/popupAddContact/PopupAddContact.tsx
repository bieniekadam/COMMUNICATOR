import "./PopupAddContact.css";
import { PopupProps } from "../../Interfaces/popupAddContact.interface";

export function Popup(props: PopupProps) {
  return props.trigger ? (
    <div className="popupAddContact">
      <div className="popupInner"></div>
      <button className="closeButton" onClick={() => props.setTrigger(false)}>
        close
      </button>
      {props.children}
    </div>
  ) : (
    <></>
  );
}
export default Popup;
