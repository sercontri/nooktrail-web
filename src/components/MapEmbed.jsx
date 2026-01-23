import React from 'react';

export default function MapEmbed({ src }) {
  return (
    <div className="map-embed">
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}