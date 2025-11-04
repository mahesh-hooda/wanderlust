import { useState } from 'react';
import { Home, Compass, Users, Gift, User } from 'lucide-react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { DiscoverPage } from './components/DiscoverPage';
import { CommunitiesPage } from './components/CommunitiesPage';
import { RewardsPage } from './components/RewardsPage';
import { ProfilePage } from './components/ProfilePage';
import { EmergencyAlert } from './components/EmergencyAlert';

type PageType = 'home' | 'discover' | 'communities' | 'rewards' | 'profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'discover':
        return <DiscoverPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'rewards':
        return <RewardsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      <Header />
      
      <main className="pb-20">
        {renderPage()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <Home size={24} />
              <span className="text-xs">Home</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('discover')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'discover' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <Compass size={24} />
              <span className="text-xs">Discover</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('communities')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'communities' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <Users size={24} />
              <span className="text-xs">Communities</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('rewards')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'rewards' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <Gift size={24} />
              <span className="text-xs">Rewards</span>
            </button>
            
            <button
              onClick={() => setCurrentPage('profile')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'profile' ? 'text-teal-600' : 'text-gray-500 hover:text-teal-600'
              }`}
            >
              <User size={24} />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Emergency Alert Panel */}
      <EmergencyAlert />
    </div>
  );
}
