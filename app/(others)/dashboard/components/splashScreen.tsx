'use client'
import { useSplashScreen } from '../context/splashScreenContext';
import LoadingComponent from "@/app/components/loading"


export default function SplashScreenComponent() {
  const { showSplashScreen } = useSplashScreen(); // Use the context here

  return (
    <>
      {showSplashScreen && <LoadingComponent text='none'/>} 
    </>
  );
}