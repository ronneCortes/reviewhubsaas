import React, { useState, useEffect } from 'react';

const POPUP_LAST_SHOWN_KEY = 'popupLastShown';
const TWO_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000; // 2 dias em milissegundos

const PopupWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(POPUP_LAST_SHOWN_KEY);
    const now = new Date().getTime();

    if (!lastShown || (now - parseInt(lastShown, 10) > TWO_DAYS_IN_MS)) {
      setIsVisible(true);
      localStorage.setItem(POPUP_LAST_SHOWN_KEY, now.toString());
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(POPUP_LAST_SHOWN_KEY, new Date().getTime().toString());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl relative w-full max-w-md mx-auto">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          aria-label="Fechar"
        >
          &times;
        </button>
        <iframe
          src="https://widget.mysaas.site/widget-embed?id=b1d495d7-0777-4604-9845-dc8c3d163181"
          width="100%"
          height="500"
          allowTransparency={true}
          style={{ display: 'block', margin: '0 auto', background: 'transparent', border: 'none' }}
          title="Local Prospecting Tool"
        ></iframe>
      </div>
    </div>
  );
};

export default PopupWidget;
