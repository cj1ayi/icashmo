import React from 'react';
import { ViewState } from '../types';
import { Icon } from '../components/Icon';

interface Props {
  onNavigate: (view: ViewState) => void;
}

const AdminDashboard: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex h-screen w-full bg-[#0a0c0f]">
       {/* Sidebar */}
       <aside className="w-64 flex flex-col border-r border-border-subtle bg-[#111318] flex-shrink-0 z-20">
          <div className="h-16 flex items-center px-6 border-b border-border-subtle cursor-pointer" onClick={() => onNavigate('LANDING')}>
             <div className="flex items-center gap-2">
                <div className="size-8 bg-gradient-to-tr from-primary to-indigo-400 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(72,72,229,0.4)]">
                   <Icon name="account_balance_wallet" className="text-[20px]" />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">iCASHMO</span>
             </div>
          </div>
          <nav className="flex-1 py-6 px-3 space-y-1">
             <p className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Platform</p>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="dashboard" className="text-[20px]" />
                <span className="text-sm font-medium">Dashboard</span>
             </a>
             <a href="#" className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors">
                <Icon name="verified_user" className="text-[20px]" filled />
                <span className="text-sm font-medium">Approvals</span>
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
             </a>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="groups" className="text-[20px]" />
                <span className="text-sm font-medium">Users</span>
             </a>
             <p className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 mt-6">System</p>
             <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                <Icon name="settings" className="text-[20px]" />
                <span className="text-sm font-medium">Settings</span>
             </a>
          </nav>
          <div className="p-4 border-t border-border-subtle">
             <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                <div className="size-8 rounded-full bg-slate-700 overflow-hidden">
                   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Admin" />
                </div>
                <div className="flex flex-col min-w-0">
                   <p className="text-sm font-medium text-white truncate">Alex Morgan</p>
                   <p className="text-xs text-slate-500 truncate">Super Admin</p>
                </div>
             </div>
          </div>
       </aside>

       {/* Main Content */}
       <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#0a0c0f] relative">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-[#0a0c0f]/80 backdrop-blur-md border-b border-border-subtle">
             <div className="px-8 py-4 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-2">
                   <span>DASHBOARD</span>
                   <span>/</span>
                   <span className="text-white">APPROVALS</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                   <div>
                      <h1 className="text-2xl font-bold text-white tracking-tight">Pending Approvals</h1>
                      <p className="text-slate-400 text-sm mt-1">Manage and review post-dated check requests.</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="relative">
                         <Icon name="calendar_today" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]" />
                         <input className="bg-[#16181d] border border-border-subtle text-slate-200 text-sm rounded-lg pl-9 pr-3 py-2 outline-none w-40" readOnly value="Oct 24, 2023" />
                      </div>
                      <button className="bg-primary hover:bg-primary-hover text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                         <Icon name="add" className="text-[18px]" /> New Request
                      </button>
                   </div>
                </div>
             </div>
          </header>

          <div className="p-8 flex flex-col gap-8 max-w-[1600px] mx-auto w-full">
             {/* Stats */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="group bg-[#16181d] rounded-lg p-5 border border-border-subtle hover:border-yellow-500/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Pending Review</p>
                         <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-yellow-400 transition-colors">3</h3>
                      </div>
                      <div className="p-2 bg-yellow-500/10 rounded-md text-yellow-500">
                         <Icon name="pending" className="text-[20px]" />
                      </div>
                   </div>
                   <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full w-[25%] rounded-full"></div>
                   </div>
                </div>
                <div className="group bg-[#16181d] rounded-lg p-5 border border-border-subtle hover:border-primary/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Active Checks</p>
                         <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors">12</h3>
                      </div>
                      <div className="p-2 bg-primary/10 rounded-md text-primary">
                         <Icon name="bolt" className="text-[20px]" />
                      </div>
                   </div>
                   <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[65%] rounded-full"></div>
                   </div>
                </div>
                <div className="group bg-[#16181d] rounded-lg p-5 border border-border-subtle hover:border-emerald-500/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Matched</p>
                         <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-emerald-400 transition-colors">5</h3>
                      </div>
                      <div className="p-2 bg-emerald-500/10 rounded-md text-emerald-500">
                         <Icon name="check_circle" className="text-[20px]" />
                      </div>
                   </div>
                   <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[40%] rounded-full"></div>
                   </div>
                </div>
                <div className="group bg-[#16181d] rounded-lg p-5 border border-border-subtle hover:border-slate-500/30 transition-all">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">Completed</p>
                         <h3 className="text-2xl font-bold text-white mt-1">8</h3>
                      </div>
                      <div className="p-2 bg-slate-700/30 rounded-md text-slate-400">
                         <Icon name="archive" className="text-[20px]" />
                      </div>
                   </div>
                   <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-slate-500 h-full w-[80%] rounded-full"></div>
                   </div>
                </div>
             </div>

             {/* Table */}
             <div className="flex flex-col">
                <div className="border-b border-border-subtle flex gap-8 mb-6">
                   <button className="pb-3 border-b-2 border-primary text-white text-sm font-medium px-1">Pending Approvals</button>
                   <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-white text-sm font-medium px-1 transition-colors">All Requests</button>
                   <button className="pb-3 border-b-2 border-transparent text-slate-400 hover:text-white text-sm font-medium px-1 transition-colors">Archive</button>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                   <div className="col-span-3">Details</div>
                   <div className="col-span-3">Company</div>
                   <div className="col-span-2 text-right">Amount</div>
                   <div className="col-span-2 text-center">Submitted</div>
                   <div className="col-span-2 text-right">Actions</div>
                </div>

                <div className="flex flex-col gap-3">
                   {/* Row 1 */}
                   <div className="group bg-[#16181d] border border-border-subtle rounded-lg p-4 grid grid-cols-12 gap-4 items-center hover:bg-[#1c1e24] hover:border-primary/20 transition-all">
                      <div className="col-span-3 flex items-start gap-3">
                         <div className="size-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                            <Icon name="payments" className="text-[20px]" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white font-mono text-sm tracking-tight group-hover:text-primary transition-colors">CK-88291</span>
                            <span className="text-slate-500 text-xs">PDC • Due Oct 30</span>
                         </div>
                      </div>
                      <div className="col-span-3 flex items-center gap-3">
                         <div className="size-6 rounded-full bg-blue-900/30 border border-blue-500/20"></div>
                         <div className="flex flex-col">
                            <span className="text-slate-200 text-sm font-medium">TechFlow Solutions</span>
                            <span className="text-slate-500 text-xs flex items-center gap-1">
                               <span className="size-1.5 rounded-full bg-emerald-500"></span> Verified Merchant
                            </span>
                         </div>
                      </div>
                      <div className="col-span-2 text-right">
                         <span className="text-white font-mono font-medium text-base">$12,500.00</span>
                      </div>
                      <div className="col-span-2 text-center">
                         <span className="px-2 py-1 rounded bg-slate-800/50 text-slate-400 text-xs font-mono">2 hrs ago</span>
                      </div>
                      <div className="col-span-2 flex items-center justify-end gap-2">
                         <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700"><Icon name="help" className="text-[20px]" /></button>
                         <button className="p-2 rounded-lg text-red-400 hover:bg-red-500/10"><Icon name="close" className="text-[20px]" /></button>
                         <button className="bg-primary hover:bg-primary-hover text-white rounded-lg p-2 flex items-center gap-2 px-3 shadow-lg shadow-primary/10">
                            <Icon name="check" className="text-[20px]" /> <span className="text-xs font-bold">Approve</span>
                         </button>
                      </div>
                   </div>

                   {/* Row 2 */}
                   <div className="group bg-[#16181d] border border-border-subtle rounded-lg p-4 grid grid-cols-12 gap-4 items-center hover:bg-[#1c1e24] hover:border-primary/20 transition-all">
                      <div className="col-span-3 flex items-start gap-3">
                         <div className="size-10 rounded bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                            <Icon name="payments" className="text-[20px]" />
                         </div>
                         <div className="flex flex-col">
                            <span className="text-white font-mono text-sm tracking-tight group-hover:text-primary transition-colors">CK-99102</span>
                            <span className="text-slate-500 text-xs">PDC • Due Nov 05</span>
                         </div>
                      </div>
                      <div className="col-span-3 flex items-center gap-3">
                         <div className="size-6 rounded-full bg-orange-900/30 border border-orange-500/20"></div>
                         <div className="flex flex-col">
                            <span className="text-slate-200 text-sm font-medium">Alpha Logistics</span>
                            <span className="text-slate-500 text-xs flex items-center gap-1">
                               <span className="size-1.5 rounded-full bg-yellow-500"></span> KYC Pending
                            </span>
                         </div>
                      </div>
                      <div className="col-span-2 text-right">
                         <span className="text-white font-mono font-medium text-base">$4,200.50</span>
                      </div>
                      <div className="col-span-2 text-center">
                         <span className="px-2 py-1 rounded bg-slate-800/50 text-slate-400 text-xs font-mono">5 hrs ago</span>
                      </div>
                      <div className="col-span-2 flex items-center justify-end gap-2">
                         <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700"><Icon name="help" className="text-[20px]" /></button>
                         <button className="p-2 rounded-lg text-red-400 hover:bg-red-500/10"><Icon name="close" className="text-[20px]" /></button>
                         <button className="bg-primary hover:bg-primary-hover text-white rounded-lg p-2 flex items-center gap-2 px-3 shadow-lg shadow-primary/10">
                            <Icon name="check" className="text-[20px]" /> <span className="text-xs font-bold">Approve</span>
                         </button>
                      </div>
                   </div>

                </div>
             </div>
          </div>
       </main>
    </div>
  );
};

export default AdminDashboard;