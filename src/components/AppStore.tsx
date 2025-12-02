import { useState } from 'react';
import { Search, Star, Download, ChevronRight } from 'lucide-react';

interface AppStoreProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  isMaximized: boolean;
}

interface App {
  name: string;
  developer: string;
  icon: string;
  rating: number;
  price: string;
  category: string;
  description: string;
}

export function AppStore({ onClose, onMinimize, onMaximize, isMaximized }: AppStoreProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const categories = ['Featured', 'Games', 'Productivity', 'Entertainment', 'Social', 'Utilities'];

  const featuredApps: App[] = [
    {
      name: 'ProEdit',
      developer: 'Creative Labs',
      icon: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=200&fit=crop',
      rating: 4.8,
      price: '$9.99',
      category: 'Productivity',
      description: 'Professional video editing made simple'
    },
    {
      name: 'TaskMaster Pro',
      developer: 'Productivity Inc',
      icon: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=200&h=200&fit=crop',
      rating: 4.6,
      price: 'Free',
      category: 'Productivity',
      description: 'Organize your life and boost productivity'
    },
    {
      name: 'PixelCraft',
      developer: 'Design Studio',
      icon: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=200&fit=crop',
      rating: 4.9,
      price: '$14.99',
      category: 'Entertainment',
      description: 'Create stunning digital artwork'
    },
    {
      name: 'FitTracker',
      developer: 'Health Co',
      icon: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200&h=200&fit=crop',
      rating: 4.7,
      price: 'Free',
      category: 'Health',
      description: 'Track your fitness journey'
    },
    {
      name: 'SoundWave',
      developer: 'Audio Labs',
      icon: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop',
      rating: 4.5,
      price: '$7.99',
      category: 'Entertainment',
      description: 'Premium music production tools'
    },
    {
      name: 'CodeMaster',
      developer: 'Dev Tools Inc',
      icon: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=200&h=200&fit=crop',
      rating: 4.8,
      price: 'Free',
      category: 'Productivity',
      description: 'Learn to code interactively'
    }
  ];

  const topGames: App[] = [
    {
      name: 'Space Adventure',
      developer: 'Galaxy Games',
      icon: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=200&h=200&fit=crop',
      rating: 4.9,
      price: '$4.99',
      category: 'Games',
      description: 'Epic space exploration game'
    },
    {
      name: 'Racing Pro',
      developer: 'Speed Studios',
      icon: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=200&h=200&fit=crop',
      rating: 4.7,
      price: 'Free',
      category: 'Games',
      description: 'High-octane racing action'
    },
    {
      name: 'Puzzle Master',
      developer: 'Brain Games',
      icon: 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=200&h=200&fit=crop',
      rating: 4.6,
      price: 'Free',
      category: 'Games',
      description: 'Mind-bending puzzle challenges'
    }
  ];

  return (
    <div className={`${isMaximized ? 'w-full h-full' : 'w-full max-w-6xl h-full'} mx-auto flex flex-col bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden`}>
      {/* Window Controls */}
      <div className="h-10 bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-200 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
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
        <div className="text-xs text-gray-600">App Store</div>
        <div className="w-16" />
      </div>

      {/* App Store Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search Bar */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 z-10">
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search apps, games, and more..."
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Featured Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Featured Apps</h2>
                <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1">
                  See All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {featuredApps.map((app, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <div className="flex gap-3">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{app.name}</h3>
                        <p className="text-xs text-gray-500 truncate">{app.developer}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{app.rating}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2">{app.description}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-gray-700">{app.price}</span>
                      <button className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs transition-colors flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        GET
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Games Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">Top Games</h2>
                <button className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1">
                  See All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {topGames.map((app, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow flex items-center gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-xl text-gray-400 w-6">{index + 1}</span>
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{app.name}</h3>
                        <p className="text-xs text-gray-500">{app.developer}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{app.rating}</span>
                          <span className="text-xs text-gray-400 ml-2">{app.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-700">{app.price}</span>
                      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-xs transition-colors flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        GET
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Categories Grid */}
            <section>
              <h2 className="text-xl mb-4">Browse by Category</h2>
              <div className="grid grid-cols-4 gap-3">
                {['Entertainment', 'Productivity', 'Games', 'Social', 'Utilities', 'Health', 'Education', 'Finance'].map((cat) => (
                  <button
                    key={cat}
                    className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white hover:shadow-lg transition-all hover:scale-105"
                  >
                    <div className="text-sm">{cat}</div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
