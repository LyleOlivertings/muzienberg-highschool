// components/AlertBanner.js
'use client';
import { useState, useEffect } from 'react';

const alertConfig = {
    emergency: {
      bgColor: 'bg-red-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    warning: {
      bgColor: 'bg-yellow-500',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    info: {
      bgColor: 'bg-blue-600',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  };
  
  export default function AlertBanner() {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const duration = parseInt(process.env.NEXT_PUBLIC_ALERT_DURATION || 10000);
    const animationDuration = 300; // Match CSS transition duration
  
    const isActive = process.env.NEXT_PUBLIC_ALERT_ACTIVE === 'true';
    const alertType = process.env.NEXT_PUBLIC_ALERT_TYPE || 'info';
    const message = process.env.NEXT_PUBLIC_ALERT_MESSAGE || 'Important announcement';
  
    useEffect(() => {
      if (isActive && duration > 0) {
        const timer = setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsVisible(false), animationDuration);
        }, duration);
  
        return () => clearTimeout(timer);
      }
    }, [isActive, duration]);
  
    const handleDismiss = () => {
      setIsExiting(true);
      setTimeout(() => setIsVisible(false), animationDuration);
    };
  
    if (!isActive || !isVisible) return null;
    const { bgColor, icon } = alertConfig[alertType] || alertConfig.info;
  
    return (
      <div className={`
        ${bgColor} text-white text-center p-3
        transition-all duration-300
        ${isExiting ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}
      `}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1 justify-center">
            {icon}
            <p className="font-medium">{message}</p>
          </div>
          <button
            onClick={handleDismiss}
            className="hover:opacity-80 transition-opacity"
            aria-label="Dismiss alert"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    );
  }