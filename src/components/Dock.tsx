import { Folder, Mail, Calendar, Image, Music, Video, Globe, FolderOpen, MessageSquare, Settings, ShoppingBag } from 'lucide-react';

interface DockProps {
  onOpenBrowser: () => void;
  onOpenAppStore: () => void;
}

export function Dock({ onOpenBrowser, onOpenAppStore }: DockProps) {
  const apps = [
    { icon: Folder, name: 'Finder', color: 'bg-blue-500' },
    { icon: Globe, name: 'Safari', color: 'bg-blue-400', onClick: onOpenBrowser },
    { icon: Mail, name: 'Mail', color: 'bg-blue-600' },
    { icon: Calendar, name: 'Calendar', color: 'bg-red-500' },
    { icon: Image, name: 'Photos', color: 'bg-gradient-to-br from-yellow-400 to-pink-500' },
    { icon: Music, name: 'Music', color: 'bg-gradient-to-br from-pink-500 to-red-500' },
    { icon: Video, name: 'TV', color: 'bg-black' },
    { icon: MessageSquare, name: 'Messages', color: 'bg-green-500' },
    { icon: ShoppingBag, name: 'App Store', color: 'bg-blue-500', onClick: onOpenAppStore },
    { icon: Settings, name: 'Settings', color: 'bg-gray-600' },
  ];

  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl px-3 py-2 shadow-2xl">
        <div className="flex items-end gap-2">
          {apps.map((app, index) => (
            <button
              key={index}
              onClick={app.onClick}
              className="group relative"
              title={app.name}
            >
              <div
                className={`w-14 h-14 ${app.color} rounded-xl flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-2`}
              >
                <app.icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {app.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}