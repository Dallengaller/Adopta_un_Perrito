// /* src/components/Tags.jsx */

import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ text, variant }) => {
  return (
    <Badge bg={variant}>
      {text}
    </Badge>
  );
};

export default Tags;
