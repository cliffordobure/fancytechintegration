// components/contact/ContactMap.jsx
import React from "react";

const ContactMap = () => {
  // Uses the exact business name as it appears on Google Maps
  const mapSrc =
    "https://www.google.com/maps?q=Fancy+Tech+Integration,+Juba,+South+Sudan&output=embed";

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-64 relative overflow-hidden">
      <iframe
        title="Fancy Tech Integration - Office Location"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;
