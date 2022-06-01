import { CgCloseO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { setPopup } from "../../store/ConversationSlice";
import "./Popup.css";

interface PopupProps {
  height: string;
  width: string;
  children: any;
  title: string;
}

export default function Popup(props: PopupProps): JSX.Element {
  const dispatch = useDispatch();
  const popupState = useSelector((state: any) => state.ConversationSlice.popup);

  return (
    <>
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
              onClick={() => {
                dispatch(setPopup(false));
              }}
              className="close-button"
            />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
