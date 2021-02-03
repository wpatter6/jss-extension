import React from "react";

import "../styles/popup.css";

const Popup: React.FC = () => {
  return (
    <div className="popup-padded">
      <h1>{chrome.i18n.getMessage("l10nHello")}</h1>
    </div>
  );
};

export default Popup;
