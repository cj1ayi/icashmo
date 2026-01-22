import React from 'react';
import { CheckListing } from '../types';
import { Icon } from './Icon';

interface CheckDetailModalProps {
  check: CheckListing;
  onClose: () => void;
}

const CheckDetailModal: React.FC<CheckDetailModalProps> = ({ check, onClose }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(amount);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-[#16181d] rounded-2xl border border-border-subtle shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`size-8 rounded bg-primary/20 flex items-center justify-center text-primary`}>
              <Icon name="receipt_long" className="text-lg" />
            </div>
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                Check #{check.id.replace('#', '')}
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wide flex items-center gap-1">
                  <Icon name="verified" className="text-[12px] filled" filled /> Active
                </span>
              </h3>
              <p className="text-xs text-slate-500 uppercase font-medium">Posted 2h ago • Live Auction</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Icon name="close" />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Check Image Placeholder */}
          <div className="w-full aspect-video bg-[#20222a] rounded-xl border border-dashed border-slate-700 flex flex-col items-center justify-center gap-3 relative group cursor-pointer overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors z-10">
               <Icon name="image" />
            </div>
            <div className="text-center z-10">
               <p className="text-sm font-medium text-slate-300">Front of Check</p>
               <p className="text-xs text-slate-500">Tap to view high-res</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-primary font-bold text-sm">
             <Icon name="analytics" className="text-lg" /> Financial Details
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Face Value</p>
                <p className="text-xl font-mono font-bold text-white">{formatCurrency(check.amount)}</p>
             </div>
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Maturity Date</p>
                <p className="text-xl font-bold text-white">{check.maturityDate}</p>
                <p className="text-xs text-orange-400 mt-1 font-medium">{check.maturityDays} Days Remaining</p>
             </div>
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Asking Price</p>
                <p className="text-xl font-mono font-bold text-white">{formatCurrency(check.askingPrice)}</p>
             </div>
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Implied Monthly Rate</p>
                <div className="flex items-center gap-2">
                   <p className="text-xl font-mono font-bold text-emerald-400">3.0%</p>
                   <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 text-[10px] font-bold">HIGH YIELD</span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Issuer Info */}
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle space-y-4">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Issuer Information</p>
                <div className="flex items-center gap-3">
                   <div className="size-10 rounded bg-[#1e2029] flex items-center justify-center font-bold text-lg text-slate-300">
                      B
                   </div>
                   <div>
                      <p className="text-sm font-bold text-white">BDO Unibank</p>
                      <p className="text-xs text-slate-500">Account ending in •••• 4592</p>
                   </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-border-subtle">
                   <span className="text-xs text-slate-500">Drawer</span>
                   <span className="text-sm font-medium text-slate-300">{check.companyName}</span>
                </div>
             </div>

             {/* Risk Assessment */}
             <div className="p-4 rounded-xl bg-[#0A0B0F] border border-border-subtle space-y-3">
                <div className="flex justify-between items-center">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Risk Assessment</p>
                   <span className="bg-[#1e2029] text-xs font-mono px-2 py-1 rounded text-slate-300">iSCORE 750</span>
                </div>
                
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                   <Icon name="security" filled />
                   <span>{check.risk}</span>
                </div>

                <div className="space-y-2">
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Icon name="check_circle" className="text-emerald-500 text-[16px]" filled />
                      SEC Registered Company
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Icon name="check_circle" className="text-emerald-500 text-[16px]" filled />
                      No Bounce History (12mo)
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#111318] border-t border-border-subtle flex justify-end gap-3">
           <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-colors">
              Cancel
           </button>
           <button className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/25 flex items-center gap-2">
              Submit Offer <Icon name="arrow_forward" className="text-[18px]" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CheckDetailModal;