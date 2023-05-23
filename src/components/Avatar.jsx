import React from 'react';
import { Image } from 'react-bootstrap';

const Avatar = ({ imageUrl, altText }) => {
  return <Image src={imageUrl} alt={altText} roundedCircle className="avatar" />;
};

export default Avatar;
