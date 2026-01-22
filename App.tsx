import React, { useState } from 'react';
import Landing from './views/Landing';
import InvestorMarketplace from './views/InvestorMarketplace';
import SMEPortal from './views/SMEPortal';
import AdminDashboard from './views/AdminDashboard';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('LANDING');

  const renderView = () => {
    switch (currentView) {
      case 'LANDING':
        return <Landing onNavigate={setCurrentView} />;
      case 'INVESTOR':
        return <InvestorMarketplace onNavigate={setCurrentView} />;
      case 'SME':
        return <SMEPortal onNavigate={setCurrentView} />;
      case 'ADMIN':
        return <AdminDashboard onNavigate={setCurrentView} />;
      default:
        return <Landing onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white relative">
      {/* Dev Navigation Overlay - For demo purposes to easily switch between "Roles" */}
      <div className="fixed bottom-6 right-6 z-[100] flex gap-2 bg-surface border border-border-subtle p-2 rounded-full shadow-2xl glass-panel">
        <button 
          onClick={() => setCurrentView('LANDING')} 
          className={`p-2 rounded-full transition-colors ${currentView === 'LANDING' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
          title="Landing Page"
        >
          <span className="material-symbols-outlined text-[20px]">home</span>
        </button>
        <button 
          onClick={() => setCurrentView('INVESTOR')} 
          className={`p-2 rounded-full transition-colors ${currentView === 'INVESTOR' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
          title="Investor Marketplace"
        >
          <span className="material-symbols-outlined text-[20px]">storefront</span>
        </button>
        <button 
          onClick={() => setCurrentView('SME')} 
          className={`p-2 rounded-full transition-colors ${currentView === 'SME' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
          title="SME Portal"
        >
          <span className="material-symbols-outlined text-[20px]">business_center</span>
        </button>
        <button 
          onClick={() => setCurrentView('ADMIN')} 
          className={`p-2 rounded-full transition-colors ${currentView === 'ADMIN' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
          title="Admin Dashboard"
        >
          <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
        </button>
      </div>

      {renderView()}
    </div>
  );
};

export default App;