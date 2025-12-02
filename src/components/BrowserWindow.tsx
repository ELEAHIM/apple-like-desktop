import { useState } from 'react';
import { X, Minus, Maximize2, ArrowLeft, ArrowRight, RotateCw, Lock, Search } from 'lucide-react';

interface BrowserWindowProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
}

export function BrowserWindow({ onClose, onMinimize, onMaximize, isMaximized }: BrowserWindowProps) {
  const [url, setUrl] = useState('https://www.google.com/webhp?igu=1');
  const [addressBarValue, setAddressBarValue] = useState('google.com');

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    let newUrl = addressBarValue;
    
    // If it looks like a search query, search Google
    if (!addressBarValue.includes('.') && !addressBarValue.startsWith('http')) {
      newUrl = `https://www.google.com/search?igu=1&q=${encodeURIComponent(addressBarValue)}`;
    } else if (!addressBarValue.startsWith('http')) {
      newUrl = `https://${addressBarValue}`;
    }
    
    setUrl(newUrl);
  };

  return (
    <div className={`${isMaximized ? 'w-full h-full' : 'w-full max-w-6xl h-full'} mx-auto flex flex-col bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden`}>
      {/* Window Controls */}
      <div className="h-10 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors group"
            title="Close"
          />
          <button 
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
            title="Minimize"
          />
          <button 
            onClick={onMaximize}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
            title="Maximize"
          />
        </div>
        <div className="text-xs text-gray-600">Safari</div>
        <div className="w-16" />
      </div>

      {/* Navigation Bar */}
      <div className="h-12 bg-white border-b border-gray-200 flex items-center gap-3 px-4">
        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <ArrowLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </button>
          <button 
            className="p-1.5 hover:bg-gray-100 rounded transition-colors"
            onClick={() => setUrl(url + '&reload=' + Date.now())}
          >
            <RotateCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleNavigate} className="flex-1">
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-1.5 hover:bg-gray-200 transition-colors">
            <Lock className="w-3 h-3 text-gray-500" />
            <input
              type="text"
              value={addressBarValue}
              onChange={(e) => setAddressBarValue(e.target.value)}
              placeholder="Search Google or enter website name"
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-500"
            />
            <Search className="w-4 h-4 text-gray-500" />
          </div>
        </form>
      </div>

      {/* Browser Content - Embedded Google */}
      <div className="flex-1 overflow-hidden bg-white">
        <iframe
          src={url}
          className="w-full h-full border-0"
          title="Browser"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}