'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { SplashScreenContextProps } from '@/types/interfaces';

const SplashScreenContext = createContext<SplashScreenContextProps | undefined>(undefined);

export const useSplashScreen = () => {
  const context = useContext(SplashScreenContext);
  if (!context) {
    throw new Error('useSplashScreen must be used within a SplashScreenProvider');
  }
  return context;
};

export const SplashScreenProvider = ({ children }: { children: ReactNode }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(false);

  return (
    <SplashScreenContext.Provider value={{ showSplashScreen, setShowSplashScreen }}>
      {children}
    </SplashScreenContext.Provider>
  );
};