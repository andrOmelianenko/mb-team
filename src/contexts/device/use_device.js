import { useEffect, useState } from 'react';
import { DEVICE } from '../../constants';

const useDevice = () => {
  const [device, setDevice] = useState('');

  const handleResize = () => {
    const { innerWidth: width } = window;
    let type = DEVICE.MOBILE;

    if (width >= 640 && width < 1000) {
      type = DEVICE.TABLET;
    } else if (width >= 1000 && width < 1400) {
      type = DEVICE.DESKTOP;
    } else if (width >= 1400) {
      type = DEVICE.WIDE;
    }

    setDevice(type);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    device,
  };
};

export default useDevice;
