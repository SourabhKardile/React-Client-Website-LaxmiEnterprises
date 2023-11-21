import React, { useState } from 'react';

export const ImageBox = ({ imageUrl, text, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    display:'inline-block',
    zIndex: isHovered ? 10 : '',
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height:'auto',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    backgroundColor: color,
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    transition: 'filter 0.3s ease-in-out',
    filter: isHovered ? 'none' : ' opacity(60%)', // Apply hue rotation on hover
  };

  const overlayStyle = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    transition: 'color 0.3s ease-in-out',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt="my Work" style={imageStyle} />
      <div style={{ ...overlayStyle, display: isHovered ? 'none' : 'block' }}>
      <h3>{text}</h3>
        
      </div>
    </div>
  );
};
