import React from "react";
import { callbackify } from "util";
import "./PopupAddContact.css";
interface PopupProps {
  trigger: any;
  height: string;
  width: string;
}
export function Popup(props: any) {
  return props.trigger ? (
    <div
      style={{
        height: props.height,
        width: props.width,
        left: `calc(50% - ${props.width}/2)`,
      }}
      className="popupAddContact"
    >
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
