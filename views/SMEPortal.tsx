import React from 'react';
import { ViewState } from '../types';
import { Icon } from '../components/Icon';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const SMEPortal: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex h-screen w-full bg-[#050608]">
       {/* Sidebar */}
       <aside className="w-64 flex flex-col border-r border-border-subtle bg-[#111318] flex-shrink-0 z-20">
          <div className="h-16 flex items-center px-6 border-b border-border-subtle cursor-pointer" onClick={() => onNavigate('LANDING')}>
             <div className="flex items-center gap-2">
                <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                   <Icon name="account_balance_wallet" className="text-[20px]" />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">iCASHMO</span>
             </div>
          </div>
          <div className="flex-1 py-6 px-3 space-y-1">
             <div className="px-3 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">SME Portal</div>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="dashboard" className="text-[20px]" />
                <span className="text-sm font-medium">Dashboard</span>
             </a>
             <a href="#" className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors">
                <Icon name="upload_file" className="text-[20px]" filled />
                <span className="text-sm font-medium">Upload Check</span>
             </a>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="history" className="text-[20px]" />
                <span className="text-sm font-medium">Transaction History</span>
             </a>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="percent" className="text-[20px]" />
                <span className="text-sm font-medium">Rates</span>
             </a>
          </div>
          <div className="p-4 border-t border-border-subtle">
             <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                <div className="size-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
                <div className="flex flex-col min-w-0">
                   <p className="text-sm font-medium text-white truncate">Acme Solutions</p>
                   <p className="text-xs text-slate-500 truncate">admin@acme.com</p>
                </div>
             </div>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 flex flex-col min-w-0 overflow-y-auto relative">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-8 border-b border-border-subtle bg-[#050608]">
             <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Checks</span>
                <span>/</span>
                <span className="text-white">New Request</span>
             </div>
             <div className="flex items-center gap-4">
                <div className="text-right">
                   <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Available Credit</p>
                   <p className="text-sm font-mono font-bold text-emerald-500">₱ 2,500,000.00</p>
                </div>
                <Icon name="notifications" className="text-slate-400" />
             </div>
          </header>

          <div className="flex-1 p-8 flex flex-col items-center justify-center">
             <div className="max-w-2xl w-full">
                <div className="text-center mb-10">
                   <h1 className="text-3xl font-bold text-white mb-2">Discount a Check</h1>
                   <p className="text-slate-400">Upload your post-dated check details below to receive an instant valuation quote.</p>
                </div>

                <div className="bg-[#111318] border border-border-subtle rounded-2xl p-8 shadow-2xl">
                   {/* Upload Area */}
                   <div className="mb-8">
                      <label className="block text-sm font-medium text-white mb-2">Check Photo</label>
                      <div className="border-2 border-dashed border-border-subtle rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
                         <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors mb-4">
                            <Icon name="add_a_photo" />
                         </div>
                         <p className="text-white font-medium">Click to upload or drag and drop</p>
                         <p className="text-slate-500 text-sm mt-1">SVG, PNG, JPG or GIF (max. 800×400px)</p>
                      </div>
                   </div>

                   {/* Form Grid */}
                   <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="col-span-1">
                         <label className="block text-xs uppercase text-slate-500 font-bold tracking-wider mb-2">Check Amount</label>
                         <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">₱</span>
                            <input type="text" placeholder="0.00" className="w-full bg-[#050608] border border-border-subtle rounded-lg py-2.5 pl-8 pr-4 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
                         </div>
                      </div>
                      <div className="col-span-1">
                         <label className="block text-xs uppercase text-slate-500 font-bold tracking-wider mb-2">Maturity Date</label>
                         <div className="relative">
                            <input type="text" placeholder="mm/dd/yyyy" className="w-full bg-[#050608] border border-border-subtle rounded-lg py-2.5 px-4 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
                            <Icon name="calendar_today" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]" />
                         </div>
                      </div>
                      <div className="col-span-2">
                         <label className="block text-xs uppercase text-slate-500 font-bold tracking-wider mb-2">Issuer Company Name</label>
                         <input type="text" placeholder="e.g. Ayala Land Inc." className="w-full bg-[#050608] border border-border-subtle rounded-lg py-2.5 px-4 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
                      </div>
                      <div className="col-span-1">
                         <label className="block text-xs uppercase text-slate-500 font-bold tracking-wider mb-2">Bank</label>
                         <div className="relative">
                            <select className="w-full bg-[#050608] border border-border-subtle rounded-lg py-2.5 px-4 text-white appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none">
                               <option>BDO Unibank</option>
                               <option>BPI</option>
                               <option>Metrobank</option>
                            </select>
                            <Icon name="expand_more" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
                         </div>
                      </div>
                      <div className="col-span-1">
                         <label className="block text-xs uppercase text-slate-500 font-bold tracking-wider mb-2">Check Number</label>
                         <input type="text" placeholder="0000000000" className="w-full bg-[#050608] border border-border-subtle rounded-lg py-2.5 px-4 text-white placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none font-mono" />
                      </div>
                   </div>

                   {/* Estimate */}
                   <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex justify-between items-center mb-8">
                      <div>
                         <p className="text-primary font-bold text-sm">Estimated Cash Out</p>
                         <p className="text-xs text-slate-500">Based on current rates (2.5% fee)</p>
                      </div>
                      <p className="text-2xl font-bold text-white font-mono">₱ 0.00</p>
                   </div>

                   {/* Actions */}
                   <div className="flex justify-end gap-4">
                      <button className="px-6 py-2.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">Cancel</button>
                      <button className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                         Submit for Review <Icon name="arrow_forward" />
                      </button>
                   </div>

                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default SMEPortal;