const ENVELOPES = {
  SERVICE_WORKER: {
    CHANNEL: 'service-worker',
    TOPICS: {
      NEW_VERSION_AVAILABLE: 'new-version-available',
    },
  },
  ERROR: {
    CHANNEL: 'error',
    TOPICS: {
      BAD_REQUEST: '400',
      NOT_FOUND: '404',
      INTERNAL_SERVER_ERROR: '500',
    },
  },
};

export default ENVELOPES;
