import { toast } from 'react-toastify';

export function useNotifications() {
  const errorMsg = (error: string) => {
    toast.error(error, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  const infoMsg = (info: String) => {
    toast(info, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
  return { errorMsg, infoMsg };
}
