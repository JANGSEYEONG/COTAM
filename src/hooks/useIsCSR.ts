'use client';

import { useEffect, useState } from 'react';

const useIsCSR = () => {
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    setIsCSR(true); // 클라이언트에서만 true로 변경
  }, []);

  return { isCSR };
};

export default useIsCSR;
