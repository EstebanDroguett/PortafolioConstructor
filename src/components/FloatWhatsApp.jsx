import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const FloatWhatsApp = () => {
    const handleClick = () => {
      const phone = "+56933088435"; // Número de teléfono de WhatsApp
      const url = `https://wa.me/${phone}`;
      window.open(url, "_blank");
    };
  
    return (
      <button className="float" onClick={handleClick}>
        <FontAwesomeIcon icon={faWhatsapp} className="my-float"/>
      </button>
    );
  }