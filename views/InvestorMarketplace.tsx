import React, { useState } from 'react';
import { ViewState, CheckListing } from '../types';
import { Icon } from '../components/Icon';
import CheckDetailModal from '../components/CheckDetailModal';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const InvestorMarketplace: React.FC<Props> = ({ onNavigate }) => {
  const [selectedCheck, setSelectedCheck] = useState<CheckListing | null>(null);

  // Mock Data from Image 1
  const listings: CheckListing[] = [
    {
      id: '#49281',
      companyName: 'Metro Builders',
      companyInitials: 'MB',
      companyColor: 'bg-indigo-100 text-primary',
      industry: 'Construction',
      risk: 'Low Risk',
      riskColor: 'text-emerald-500',
      amount: 100000,
      askingPrice: 85000,
      maturityDays: 60,
      maturityDate: 'Nov 24',
      netReturn: 15000,
      returnPct: 17.6,
      status: 'ACTIVE'
    },
    {
      id: '#49302',
      companyName: 'AgriSupply Co.',
      companyInitials: 'AS',
      companyColor: 'bg-orange-100 text-orange-600',
      industry: 'Agriculture',
      risk: 'Med Risk',
      riskColor: 'text-yellow-500',
      amount: 500000,
      askingPrice: 410000,
      maturityDays: 120,
      maturityDate: 'Jan 25',
      netReturn: 90000,
      returnPct: 21.9,
      status: 'ACTIVE'
    },
    {
      id: '#49315',
      companyName: 'Tech Solutions',
      companyInitials: 'TS',
      companyColor: 'bg-blue-100 text-blue-600',
      industry: 'Technology',
      risk: 'Low Risk',
      riskColor: 'text-emerald-500',
      amount: 75000,
      askingPrice: 68500,
      maturityDays: 30,
      maturityDate: 'Oct 24',
      netReturn: 6500,
      returnPct: 9.4,
      status: 'ACTIVE'
    },
    {
      id: '#49322',
      companyName: 'Logistics Global',
      companyInitials: 'LG',
      companyColor: 'bg-purple-100 text-purple-600',
      industry: 'Transport',
      risk: 'Low Risk',
      riskColor: 'text-emerald-500',
      amount: 250000,
      askingPrice: 215000,
      maturityDays: 90,
      maturityDate: 'Dec 24',
      netReturn: 35000,
      returnPct: 16.2,
      status: 'ACTIVE'
    },
    {
      id: '#49200',
      companyName: 'Retail Mart',
      companyInitials: 'RM',
      companyColor: 'bg-gray-100 text-gray-500',
      industry: 'Retail',
      risk: 'Med Risk',
      riskColor: 'text-gray-400',
      amount: 120000,
      askingPrice: 105000,
      maturityDays: 45,
      maturityDate: 'Nov 12',
      netReturn: 15000,
      returnPct: 14.2,
      status: 'PENDING'
    },
    {
      id: '#49330',
      companyName: 'Fresh Produce Inc',
      companyInitials: 'FP',
      companyColor: 'bg-teal-100 text-teal-600',
      industry: 'F&B',
      risk: 'Low Risk',
      riskColor: 'text-emerald-500',
      amount: 80000,
      askingPrice: 72000,
      maturityDays: 45,
      maturityDate: 'Nov 05',
      netReturn: 8000,
      returnPct: 11.1,
      status: 'ACTIVE'
    },
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-sans transition-colors duration-200">
      
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-border-dark bg-white/95 dark:bg-[#121221]/95 backdrop-blur-sm px-6 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate('LANDING')}
            >
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:bg-primary-hover transition-colors">
                <Icon name="account_balance_wallet" className="text-[20px]" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">iCASHMO</h2>
            </div>
            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-white transition-colors">Dashboard</a>
              <a href="#" className="text-primary text-sm font-medium relative py-1">
                Marketplace
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              </a>
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary dark:hover:text-white transition-colors">Wallet</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
             <div className="hidden lg:flex flex-col items-end mr-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Available Balance</span>
                <span className="text-sm font-bold text-slate-800 dark:text-white font-mono">₱ 2,450,000.00</span>
             </div>
             <div className="h-8 w-px bg-gray-200 dark:bg-border-dark hidden lg:block"></div>
             <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors">
                   <Icon name="notifications" />
                   <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#121221]"></span>
                </button>
                <button className="flex items-center gap-3 pl-1 pr-2 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-border-dark">
                   <div 
                      className="size-8 rounded-full bg-cover bg-center ring-2 ring-primary/20" 
                      style={{ backgroundImage: `url('https://picsum.photos/id/64/200/200')`}}
                   ></div>
                   <span className="text-sm font-medium hidden sm:block">Alex V.</span>
                   <Icon name="expand_more" className="text-slate-400 text-[18px]" />
                </button>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-6 py-8">
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8">
            <div className="flex flex-col gap-2">
               <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black tracking-tight">Marketplace</h1>
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">LIVE</span>
               </div>
               <p className="text-slate-500 dark:text-slate-400 font-medium">Showing <span className="text-slate-900 dark:text-white font-bold">14 active listings</span> available for funding.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
               {/* Search */}
               <div className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                     <Icon name="search" className="text-[20px]" />
                  </span>
                  <input 
                     type="text" 
                     placeholder="Search company or ID..."
                     className="bg-white dark:bg-[#1b1b32] border border-gray-200 dark:border-border-dark text-slate-900 dark:text-white text-sm rounded-lg pl-10 pr-4 py-2.5 w-64 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  />
               </div>
               
               <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1b1b32] border border-gray-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                  <Icon name="filter_list" className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold">Filter</span>
               </button>
               
               <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1b1b32] border border-gray-200 dark:border-border-dark rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                  <Icon name="sort" className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-semibold">Sort by Return</span>
               </button>
            </div>
         </div>

         {/* Filter Chips */}
         <div className="flex flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-border-dark">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 dark:bg-white text-slate-900 text-sm font-bold border border-transparent shadow-sm">
               All Industries
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1b1b32] text-slate-600 dark:text-slate-400 text-sm font-medium border border-gray-200 dark:border-border-dark hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">
               <span className="size-2 rounded-full bg-emerald-500"></span> Low Risk
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1b1b32] text-slate-600 dark:text-slate-400 text-sm font-medium border border-gray-200 dark:border-border-dark hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">
               <Icon name="bolt" className="text-[16px]" /> Short Term {'(< 30 days)'}
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#1b1b32] text-slate-600 dark:text-slate-400 text-sm font-medium border border-gray-200 dark:border-border-dark hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white transition-all">
               <Icon name="trending_up" className="text-[16px]" /> High Return { '(> 15%)' }
            </button>
         </div>

         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {listings.map((item, idx) => (
               <div 
                  key={idx}
                  className={`group relative flex flex-col bg-white dark:bg-background-card rounded-xl border border-gray-200 dark:border-border-dark overflow-hidden transition-all duration-300 ${item.status === 'PENDING' ? 'opacity-75 hover:opacity-100' : 'hover:border-primary/50 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(72,72,229,0.1)]'}`}
               >
                  {/* Pending Overlay */}
                  {item.status === 'PENDING' && (
                     <div className="absolute inset-0 bg-gray-100/50 dark:bg-black/40 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[1px]">
                        <span className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Pending Offer</span>
                     </div>
                  )}

                  {/* Header */}
                  <div className="p-6 flex flex-col gap-4 border-b border-gray-100 dark:border-border-dark">
                     <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                           <div className={`size-10 rounded-lg flex items-center justify-center font-bold text-lg ${item.companyColor} dark:bg-opacity-10`}>
                              {item.companyInitials}
                           </div>
                           <div>
                              <h3 className="text-slate-900 dark:text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{item.companyName}</h3>
                              <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                 <span>ID: {item.id}</span>
                                 <span>•</span>
                                 <span>{item.industry}</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                           <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wide border ${item.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' : 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20'}`}>
                              {item.status === 'ACTIVE' ? 'Active' : 'Pending'}
                           </span>
                           <div className={`flex items-center gap-1.5 text-xs font-semibold ${item.riskColor}`}>
                              {item.status === 'ACTIVE' && (
                                 <span className="relative flex h-2 w-2">
                                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${item.risk === 'Low Risk' ? 'bg-emerald-400' : 'bg-yellow-400'}`}></span>
                                    <span className={`relative inline-flex rounded-full h-2 w-2 ${item.risk === 'Low Risk' ? 'bg-emerald-500' : 'bg-yellow-500'}`}></span>
                                 </span>
                              )}
                              {item.risk}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
                     <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">Check Amount</span>
                        <span className="text-slate-900 dark:text-white font-mono font-medium">{formatCurrency(item.amount)}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">Asking Price</span>
                        <span className={`font-mono font-bold text-lg ${item.status === 'PENDING' ? 'text-slate-400' : 'text-emerald-600 dark:text-accent-green'}`}>{formatCurrency(item.askingPrice)}</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">Maturity</span>
                        <div className="flex items-center gap-2">
                           <span className="text-slate-900 dark:text-white font-medium">{item.maturityDays} Days</span>
                           {item.status === 'ACTIVE' && <span className="text-xs text-slate-400">({item.maturityDate})</span>}
                        </div>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">Net Return</span>
                        <div className="flex items-baseline gap-2">
                           <span className="text-slate-900 dark:text-white font-mono font-bold">{formatCurrency(item.netReturn)}</span>
                           <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${item.status === 'PENDING' ? 'text-gray-500 bg-gray-500/10' : 'text-emerald-500 bg-emerald-500/10'}`}>+{item.returnPct}%</span>
                        </div>
                     </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-auto p-4 bg-slate-50 dark:bg-[#16162a] border-t border-gray-100 dark:border-border-dark flex gap-3">
                     <button 
                        onClick={() => setSelectedCheck(item)}
                        className={`flex-1 h-10 flex items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${item.status === 'PENDING' ? 'border-gray-300 dark:border-border-dark text-slate-400 cursor-not-allowed' : 'border-gray-300 dark:border-border-dark text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}
                     >
                        {item.status === 'PENDING' ? 'Locked' : 'View Details'}
                     </button>
                     {item.status === 'ACTIVE' && (
                        <button 
                           onClick={() => setSelectedCheck(item)}
                           className="flex-1 h-10 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all transform active:scale-95"
                        >
                           Make Offer
                           <Icon name="arrow_forward" className="text-[18px]" />
                        </button>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </main>

      {selectedCheck && (
        <CheckDetailModal check={selectedCheck} onClose={() => setSelectedCheck(null)} />
      )}
    </div>
  );
};

export default InvestorMarketplace;