import { useState } from 'react';
import { MenuBar } from './MenuBar';
import { Dock } from './Dock';
import { BrowserWindow } from './BrowserWindow';
import { AppStore } from './AppStore';

interface Window {
  id: string;
  type: 'browser' | 'appstore';
  isMinimized: boolean;
  isMaximized: boolean;
}

export function Desktop() {
  const [windows, setWindows] = useState<Window[]>([
    { id: '1', type: 'browser', isMinimized: false, isMaximized: false }
  ]);

  const openWindow = (type: 'browser' | 'appstore') => {
    const existingWindow = windows.find(w => w.type === type);
    if (existingWindow) {
      // Unminimize if minimized
      setWindows(windows.map(w => 
        w.type === type ? { ...w, isMinimized: false } : w
      ));
    } else {
      setWindows([...windows, { 
        id: Date.now().toString(), 
        type, 
        isMinimized: false, 
        isMaximized: false 
      }]);
    }
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };

  const minimizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  };

  const maximizeWindow = (id: string) => {
    setWindows(windows.map(w => 
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  };

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Wallpaper */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1624847706671-a7bf2f92ede0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNPUyUyMGJpZyUyMHN1ciUyMHdhbGxwYXBlcnxlbnwxfHx8fDE3NjQ2MzM4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)' }}
      />

      {/* Menu Bar */}
      <MenuBar />

      {/* Desktop Content */}
      <div className="absolute inset-0 top-6 bottom-20 p-4">
        {windows.map((window) => (
          !window.isMinimized && (
            <div 
              key={window.id}
              className={window.isMaximized ? "absolute inset-4" : ""}
            >
              {window.type === 'browser' && (
                <BrowserWindow 
                  onClose={() => closeWindow(window.id)}
                  onMinimize={() => minimizeWindow(window.id)}
                  onMaximize={() => maximizeWindow(window.id)}
                  isMaximized={window.isMaximized}
                />
              )}
              {window.type === 'appstore' && (
                <AppStore 
                  onClose={() => closeWindow(window.id)}
                  onMinimize={() => minimizeWindow(window.id)}
                  onMaximize={() => maximizeWindow(window.id)}
                  isMaximized={window.isMaximized}
                />
              )}
            </div>
          )
        ))}
      </div>

      {/* Dock */}
      <Dock 
        onOpenBrowser={() => openWindow('browser')} 
        onOpenAppStore={() => openWindow('appstore')}
      />
    </div>
  );
}