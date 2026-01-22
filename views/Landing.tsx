import React from 'react';
import { ViewState } from '../types';
import { Icon } from '../components/Icon';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const Landing: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0B0F] text-white font-sans overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border-subtle bg-[#0A0B0F]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
              <Icon name="account_balance_wallet" className="text-[20px]" />
            </div>
            <span className="font-bold text-lg tracking-tight">iCASHMO</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">SMEs</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Investors</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">How it Works</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all">
              Login
            </button>
            <button 
              onClick={() => onNavigate('INVESTOR')}
              className="h-9 px-4 flex items-center justify-center rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-[0_0_15px_-3px_rgba(72,72,229,0.4)]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(72,72,229,0.15)_0%,_rgba(10,11,15,0)_50%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left */}
            <div className="flex flex-col gap-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
                  <span className="relative flex h-2 w-2">
                    <span className="inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  </span>
                  <span className="text-xs font-medium text-indigo-300">Live Marketplace</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                  Turn Post-Dated <br className="hidden lg:block"/> Checks Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Cash Today</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  The secure marketplace connecting SMEs with investors for instant liquidity. No collateral needed, just your receivables.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button onClick={() => onNavigate('SME')} className="w-full sm:w-auto h-12 px-8 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold transition-all flex items-center justify-center gap-2">
                  <Icon name="storefront" className="text-[20px]" />
                  For Businesses
                </button>
                <button onClick={() => onNavigate('INVESTOR')} className="w-full sm:w-auto h-12 px-8 rounded-lg bg-surface border border-border-subtle hover:border-gray-500 text-white font-medium transition-all flex items-center justify-center gap-2 group">
                  <Icon name="trending_up" className="text-[20px] text-gray-400 group-hover:text-white transition-colors" />
                  For Investors
                </button>
              </div>
            </div>

            {/* Right (Simulator) */}
            <div className="relative w-full max-w-md mx-auto lg:max-w-full">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <Icon name="receipt_long" className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Asset Type</p>
                      <p className="text-sm font-medium text-white">Post-Dated Check</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Maturity</p>
                    <p className="text-sm font-medium text-white">60 Days</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-surface rounded-xl p-4 border border-border-subtle group hover:border-primary/50 transition-colors cursor-default">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-400">Check Face Value</span>
                      <Icon name="edit" className="text-[16px] text-gray-600" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-white tracking-tight">₱ 100,000.00</div>
                  </div>
                  <div className="flex justify-center -my-3 relative z-10">
                    <div className="bg-surface-highlight border border-border-subtle rounded-full p-2 text-gray-400">
                      <Icon name="arrow_downward" />
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1b1b3a] to-surface rounded-xl p-4 border border-primary/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-10">
                      <Icon name="payments" className="text-6xl" />
                    </div>
                    <div className="flex justify-between items-center mb-1 relative z-10">
                      <span className="text-sm text-indigo-200">Immediate Cash Received</span>
                      <span className="text-xs font-bold bg-green-500/20 text-green-400 px-2 py-0.5 rounded uppercase">+85% Liquidity</span>
                    </div>
                    <div className="text-3xl font-mono font-bold text-white tracking-tight relative z-10">₱ 85,000.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-surface border-t border-border-subtle pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          © 2023 iCASHMO Financial Technologies Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;