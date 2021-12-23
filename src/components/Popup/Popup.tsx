import { CgCloseO } from "react-icons/cg";
import "./Popup.css";

interface PopupProps {
  trigger: any;
  height: string;
  width: string;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  title: string;
}

export function Popup(props: PopupProps): JSX.Element {
  return props.trigger ? (
    <div className="background-popup">
      <div
        style={{
          height: props.height,
          width: props.width,
          left: `calc(50% - ${props.width}/2)`,
        }}
        className="popup"
      >
        <div className="popup-inner">
          <div className="popup-title">{props.title}</div>
          <CgCloseO
            onClick={() => props.setTrigger(false)}
            className="close-button"
          />
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Popup;
