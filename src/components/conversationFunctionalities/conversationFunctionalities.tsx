import "./conversationFunctionalities.css";

import { FaPhone, FaVideo, FaCamera } from "react-icons/fa";

import { Link } from "react-router-dom";
import { CSSProperties } from "react";

export function ConversationFunctionalities() {
  let phoneIconColor = "light-blue";

  return (
    <div className="conversation-functionalities">
      <div className="phone-icon">
        <Link to="https://www.youtube.com">
          <FaPhone
            style={{ color: phoneIconColor }}
            onMouseOver={() => (phoneIconColor = "white")}
            onMouseOut={() => (phoneIconColor = "light-blue")}
          />
        </Link>
      </div>
      <div className="video-icon">
        <FaVideo />
      </div>
      <div className="camera-icon">
        <FaCamera />
      </div>
    </div>
  );
}
