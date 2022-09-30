import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(
() => {
  console.log("mounted")
  window.addEventListener('online', handleOffline)
  window.addEventListener('offline', handleOffline)
  
  return () => {
    console.log("unmount")
    window.removeEventListener('online', handleOffline)
    window.removeEventListener('offline', handleOffline)
  }
}
  ),[];

  const handleOffline = () => {
    setIsOnline(false)
    console.log("Jsi offline")
  }

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
      
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;