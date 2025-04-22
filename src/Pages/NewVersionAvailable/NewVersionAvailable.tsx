import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import React from 'react';

type NewVersionAvailableProps = {
  newVersionAvailable: boolean;
  applyUpdate: () => void;
};

const StyledAlert = styled(MuiAlert)({
  position: 'absolute',
  width: '100vw',
  borderRadius: '0',
  zIndex: '10',
});

const NewVersionAvailable = ({
  newVersionAvailable,
  applyUpdate,
}: NewVersionAvailableProps) => {
  return (
    <>
      {newVersionAvailable && (
        <StyledAlert variant='filled' severity='info' onClick={applyUpdate}>
          New Version Available! Click here to reload and apply update.
        </StyledAlert>
      )}
    </>
  );
};

export default React.memo(NewVersionAvailable);
