import React from "react";
import "./PopupAddContact.css";

export function Popup(props: any) {
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
