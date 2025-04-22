import { toast } from 'react-toastify';

const withToast = (promise: Promise<any>) => {
  return toast.promise(promise, {
    pending: 'Saving...',
    success: 'Save successful.',
    error: 'Save failed.',
  });
};

export default withToast;
