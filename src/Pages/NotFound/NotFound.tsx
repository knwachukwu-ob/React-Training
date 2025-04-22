import React from 'react';
import { Card, Typography } from '../../Components';

const NotFound = () => {
  return (
    <Card title='404 Page Not Found. Woops!'>
      <Typography>Nothing to see here...</Typography>
    </Card>
  );
};

export default React.memo(NotFound);
