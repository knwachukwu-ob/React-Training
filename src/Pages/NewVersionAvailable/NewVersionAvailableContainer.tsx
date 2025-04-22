import React from 'react';
import useServiceWorker from '../../Providers/service-worker';
import NewVersionAvailable from './NewVersionAvailable';

const NewVersionAvailableContainer = () => {
  const { serviceWorkerWaiting, applyServiceWorkerUpdate } = useServiceWorker();

  return (
    <NewVersionAvailable
      newVersionAvailable={serviceWorkerWaiting}
      applyUpdate={applyServiceWorkerUpdate}
    />
  );
};

export default React.memo(NewVersionAvailableContainer);
